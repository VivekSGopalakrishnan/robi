import React, {useState} from 'react'
import './Res.css'
import resume from '../assets/resume-6.svg'
import styled from 'styled-components';
const Res = () => {
    const Res1 = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid  ${({ theme }) => theme.primaryColor};
    
  `;

  return (
    <div className="resume">
      <div className="res-content">
       
        Resume</div>
      <a href='https://drive.google.com/file/d/1slonJkjCElK2oc-Grhz11Bn10EY9oxBs/view?usp=sharing'><button  className='res-download'>Download Resume</button></a>
      <div className="res">
      <Res1> <section className="right-res">
          <img className='res-bg' src={resume}></img>
        </section></Res1>
      </div>
    </div>
  );
};

export default Res