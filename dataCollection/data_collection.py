import yfinance as yf
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def is_valid_period(input_period):
    '''Check if the input time period is valid.'''
    period = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max']
    return input_period in period

def is_valid_ticker(input_ticker):
    '''Check if the input stock ticker is valid.'''
    ticker = yf.Ticker(input_ticker)
    history = ticker.history(period='1y')
    return not history.empty

@app.route('/api/get_data', methods=['GET'])
def get_data():
    ticker = request.args.get('ticker')
    period = request.args.get('period')

    # Validate ticker and period
    if not ticker or not period:
        return jsonify({'error': 'Please provide both ticker and period.'}), 400

    if not is_valid_ticker(ticker):
        return jsonify({'error': 'Invalid stock ticker.'}), 400

    if not is_valid_period(period):
        return jsonify({'error': 'Invalid time period.'}), 400

    # Fetch stock data
    stock = yf.Ticker(ticker)

    # Get historical data
    history = stock.history(period=period)

    if history.empty:
        return jsonify({'error': 'No data found for the given ticker and period.'}), 404

    # Convert the history DataFrame to a list of dictionaries, converting dates to strings
    history.reset_index(inplace=True)
    history['Date'] = history['Date'].dt.strftime('%Y-%m-%d')  # Format date as string
    history_data = history.to_dict(orient='records')  # Convert DataFrame to list of dicts

    # Extract relevant stats
    data = {
        'Ticker': ticker,
        'Name': stock.info.get('longName', 'N/A'),
        'Current Price': stock.info.get('last_price', 'N/A'),
        'Market Cap': stock.info.get('marketCap', 'N/A'),
        'PE Ratio': stock.info.get('trailingPE', 'N/A'),
        '52 Week High': stock.info.get('fiftyTwoWeekHigh', 'N/A'),
        '52 Week Low': stock.info.get('fiftyTwoWeekLow', 'N/A'),
        'Recent History': history_data  # Include the formatted history data
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
