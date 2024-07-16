import React from 'react';
import styled, { keyframes } from 'styled-components';
import RotatingCube from './RotatingCube';

const gradientBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(270deg, black, #0d0c0a, black);
  background-size: 600% 600%;
  animation: ${gradientBackground} 16s ease infinite;
  color: white;
  position: relative;
  padding: 0 50px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Times New Roman', Times, serif;
  animation: ${shake} 0.5s infinite;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  font-family: 'Times New Roman', Times, serif;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% - 60px); /* Adjusted height to account for the header and footer */
  padding-top: 60px;
  padding-bottom: 60px;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header>
        <h1>Z A K R O N</h1>
      </Header>
      <MainContent>
        <div>
          <Title>ROTATING CUBE</Title>
        </div>
        <div>
          <RotatingCube />
        </div>
      </MainContent>
      <Footer>&copy; 2024 Zakron IT Industry. ALL RIGHTS RESERVED . PRANAY JAIN</Footer>
    </HomePageContainer>
  );
};

export default HomePage;
