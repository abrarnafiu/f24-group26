from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/api/stock', methods = ['GET'])
def get_stock_data():
    apple_stock = yf.ticker('AAPL')
    stock_info = apple_stock.info
    return jsonify ( {
        'symbol':stock_info['symbol'],
        'currentPrice':stock_info['regularMarketPlace'],
        'dayHigh' : stock_info['dayHigh'],
        'dayLow' : stock_info['dayLow'],
    })
    
@app.route('/')
def serve():
    return send_from_directory('.', 'index.html') 

if __name__ == '__main__':
    app.run(debug=True)