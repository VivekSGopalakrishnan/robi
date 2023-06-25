
import './App.css'
import Home from './Home/Home'
import Landing from './Landing/Landing'
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const AppContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.primaryColor};
  `;

  const ToggleButton = styled.div`
    background-color: #000000;

    color: #ffffff;
    position: absolute;
    right: 0;
    margin-right:20px; 
    margin-top:20px; 
    padding: 5px 15px 5px 15px;
    border-radius:20px;
    font-size:20px;
    font-weight:500;

    z-index:100;
  `;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <AppContainer>
          <Home />
          <ToggleButton onClick={toggleDarkMode}>{isDarkMode ? 'Dark' : 'Light'}</ToggleButton>
          <Landing isDarkMode={isDarkMode} />
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App
