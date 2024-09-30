import yfinance as yf

# is_valid_period checks if the input_period is valid and returns True if it is, or False if it is not.
def is_valid_period(input_period):
    period = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max']
    return (input_period in period)

#is_valid_ticker checks if the input_ticker is valid and returns True if it is, or False if it is not.
def is_valid_ticker(input_ticker):
    ticker = yf.Ticker(input_ticker)
    history = ticker.history(period='1y')
    if history.empty:
        return False
    else:  
        return True

# print_data checks to see if both input_period and input_period are valid inputs and if so, prints the data, otherwise returns a message.
def print_data (input_ticker, input_period):
    if is_valid_period(input_period):
        if is_valid_ticker(input_ticker):
            ticker = yf.Ticker(input_ticker)
            history = ticker.history(period='1y')
            print(history)
        else:
            print("Not valid ticker")
    else:
        print("Not valid period")

print_data("AAPL", "1y")

