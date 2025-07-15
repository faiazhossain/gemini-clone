import React from 'react';
import './Main.css';
import { FaUser } from 'react-icons/fa';
const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <FaUser />
      </div>
      <div className='main-container'>
        <div className='greet'>
          <p>
            <span>Hello, Dev</span>
            <p>How can I help you today?</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
