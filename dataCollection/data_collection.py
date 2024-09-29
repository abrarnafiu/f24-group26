
import yfinance as yf

inputTicker = "AAPL"
inputTimeFrame = "1mo"

# Fetch data for the stock
ticker = yf.Ticker(inputTicker)

# assign data to dataHistory
dataHistory = ticker.history(period = inputTimeFrame)  # '1y' stands for one year

# Display dataHistory
print(dataHistory)


