import React, { useState } from "react";
import styled from "styled-components";
import NavigationBar from '../components/Navbar';

const GetStartedPage: React.FC = () => {
  const [ticker, setTicker] = useState<string>(''); 
  const [period, setPeriod] = useState<string>(''); 
  const [stockData, setStockData] = useState<any>(null); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/get_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticker, period }),
      });

      if (response.ok) {
        const data = await response.json();
        setStockData(data.data);  // Update state with stock data
      } else {
        console.error('Error submitting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <NavigationBar />
      <Content>
        <h2>Get Stock Data</h2>
        <form onSubmit={handleSubmit}>
          <StyledLabel>Ticker Symbol:</StyledLabel>
          <StyledInput
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="e.g., AAPL"
          />
          <StyledLabel>Period:</StyledLabel>
          <StyledInput
            type="text"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            placeholder="e.g., 1y, 1mo"
          />
          <StyledButton type="submit">Submit</StyledButton>
        </form>
        {stockData && (
          <div>
            <h3>Stock Data for {ticker} ({period}):</h3>
            <ul>
              {stockData.map((entry: any, index: number) => (
                <li key={index}>
                   <strong>Date:</strong> {entry.Date} | 
                  <strong> Open:</strong> {entry.Open} | 
                  <strong> Close:</strong> {entry.Close} |
                  <strong> High:</strong> {entry.High} | 
                  <strong> Low:</strong> {entry.Low}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default GetStartedPage;

// Styled components for layout
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  display: inline-block;
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;
