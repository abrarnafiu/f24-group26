import NavigationBar from '../components/Navbar';
import styled from 'styled-components';
const HomePage = () => {
    return (
        <div> 
            <NavigationBar />
            <HeroSection />
        </div>
    );
  };
  const HeroSection = () => {
    return (
      <Hero>
        <Content>
          <h1>Algorithmic Trading</h1>
          <p>Use Data to Get a 360-Degree View of Your Business</p>
          <button>Learn More</button>
        </Content>
      </Hero>
    );
  };
  
  const Hero = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #242424; /* Matches your provided CSS background */
  `;
  
  const Content = styled.div`
    text-align: center;
    h1 {
      font-size: 3.2rem;
      line-height: 1.1;
      color: rgba(255, 255, 255, 0.87);
    }
    p {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.87);
    }
    button {
      background-color: #e63946;
      color: #fff;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 8px;
    }
    button:hover {
      background-color: #d32f2f;
    }
  `;
export default HomePage;