
import './App.css'
import Home from './Home/Home'
import Landing from './Landing/Landing'
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import {PiSunDim} from 'react-icons/pi'
import {BsMoon} from 'react-icons/bs'
import Res from './resume/Res';
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const AppContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.primaryColor};
  `;

  const ToggleButton = styled.div`
    width:20px;

    color: #ffffff;
    right: 0;
    margin-right:20px; 
    margin-top:20px;
    position:absolute;
    padding: 5px 20px 5px 15px;

    z-index:200;
  `;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <AppContainer>
          <ToggleButton onClick={toggleDarkMode}>{isDarkMode ?<PiSunDim size={35}/> : <BsMoon size={30} color='#000000'/>}</ToggleButton>
          <Landing isDarkMode={isDarkMode} />
          <Home />
          <Res/>
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default App
