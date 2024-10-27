import yfinance as yf
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def is_valid_period(input_period):
    '''Take input_ticker and if it is valid, return #true, else return #false.'''
    period = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max']
    return (input_period in period)

def is_valid_ticker(input_ticker):
    '''Take input_ticker and if it is valid, return #true, else return #false.'''
    ticker = yf.Ticker(input_ticker)
    history = ticker.history(period='1y')
    if history.empty:
        return False
    else:  
        return True

@app.route('/api/get_data')
def get_data():
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":10,  
        "programming":"python"
        }


if __name__ == '__main__':
    app.run(debug=True)

