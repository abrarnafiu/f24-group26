// Solutions.jsx
import React from "react";
import styled from "styled-components";
import NavigationBar from "../components/Navbar";

const Solutions = () => {
  return (
    <MainContainer>
      <NavigationBar />
      <Header>
        <h1>Our Solutions</h1>
        <p>
          Explore the diverse range of solutions we offer to elevate your
          business.
        </p>
      </Header>
      <SolutionsGrid>
        <SolutionCard
          title="Solution 1"
          description="Description of solution 1."
        />
        <SolutionCard
          title="Solution 2"
          description="Description of solution 2."
        />
        <SolutionCard
          title="Solution 3"
          description="Description of solution 3."
        />
      </SolutionsGrid>
      <Footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </Footer>
    </MainContainer>
  );
};

interface SolutionCardProps {
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description }) => {
  return (
    <Card>
      <TitleBar>
        <h2>{title}</h2>
      </TitleBar>
      <Description>
        <p>{description}</p>
        <button>Learn More</button>
      </Description>
    </Card>
  );
};
const Description = styled.div`
  padding: 15px; /* Padding for the description area */
  background-color: white; /* Background color for the description */

  button {
    background-color: #e63946; /* Button color */
    color: white; /* Button text color */
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: #d32f2f; /* Darker color on hover */
    }
  }
`;
const TitleBar = styled.div`
  background-color: black; /* Black bar color */
  color: white; /* Text color */
  padding: 10px; /* Padding for the title bar */
  height: 60px;
  text-align: center; /* Center the text */
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center; /* Center children horizontally */
  position: relative;
`;

const Header = styled.header`
  position: absolute;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  color: black;
  top: 70px;
`;

const SolutionsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap = wrap;
  grid-template-columns: repeat(auto-fill, minmax(3000px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    background-color: #e63946;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #d32f2f;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #242424;
  color: white;
`;

export default Solutions;
