import React, { useState } from "react";
import styled from "styled-components";
import NavigationBar from '../components/Navbar';

const GetStartedPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>(''); // State to store user input

  // Function to handle changes in the input box
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the state with the new input value
  };

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: inputValue }), // Send input as JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response from server:', data); // Handle server response
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
        <h2>Get Started</h2>
        <StyledLabel htmlFor="userInput">Enter your details:</StyledLabel>
        <form onSubmit={handleSubmit}> {/* Use a form element here */}
          <StyledInput
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something here..."
          />
          <StyledButton type="submit">Submit</StyledButton> {/* Change button type to submit */}
        </form>
        <p>You entered: {inputValue}</p> {/* Display the input value */}
      </Content>
    </Container>
  );
};

export default GetStartedPage;

// Styled components
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
