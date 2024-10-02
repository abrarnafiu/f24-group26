import yfinance as yf

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

def print_data (input_ticker, input_period):
    '''Take input_ticker and input_period and if they are valid, return the data, else return a message.'''
    if is_valid_ticker(input_ticker):
        if is_valid_period(input_period):
            ticker = yf.Ticker(input_ticker)
            history = ticker.history(period='1y')
            print(history)
        else:
            print("Not valid period")
    else:
        print("Not valid ticker")

print_data("AAPL", "1y")

