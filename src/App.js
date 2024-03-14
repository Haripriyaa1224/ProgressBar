import React, { useState, useEffect } from 'react';
import './App.css'

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <span className="progress-text" >{`${percentage}%`}</span>
      </div>
    </div>
  );
};

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval duration as needed (e.g., 1000ms = 1 second)

    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
  }, [progress]);

  return (
    <div style={
      {display: 'flex',
    flexDirection:'column',
  alignItems: 'center',
justifyContent: 'center',
height:'80vh'}
    }>
      <h1>Progress Bar Example</h1>
      <ProgressBar percentage={progress} />
    </div>
  );
};

export default App;
