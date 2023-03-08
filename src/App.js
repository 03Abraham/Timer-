
import './App.css';
import React, { useState, useRef } from 'react';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  function startChronometre() {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setSeconds((seconds) => {
        const nextSeconds = seconds + 1;
        if (nextSeconds === 60) {
          setMinutes((minutes) => {
            const nextMinutes = minutes + 1;
            if (nextMinutes === 60) {
              setHours((hours) => hours + 1);
            }
            return nextMinutes % 60;
          });
        }
        return nextSeconds % 60;
      });
    }, 1000);
  }

  function pauseChronometre() {
    setIsActive((isActive) => !isActive);
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setSeconds((seconds) => {
          const nextSeconds = seconds + 1;
          if (nextSeconds === 60) {
            setMinutes((minutes) => {
              const nextMinutes = minutes + 1;
              if (nextMinutes === 60) {
                setHours((hours) => hours + 1);
              }
              return nextMinutes % 60;
            });
          }
          return nextSeconds % 60;
        });
      }, 1000);
    }
  }

  function resetChronometre() {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className='Box__Chrono'>
      <h1>Chronomètre: {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
      <div className='btn'>
         <button onClick={startChronometre} disabled={isActive} className ='btn1'>
            Start
         </button>
         
         {isActive ?

            (<button onClick={pauseChronometre} className='btn0'>Pause</button>)
            : (<button onClick={pauseChronometre} className='btn2'>Resume</button>)

         }
        
         <button onClick={resetChronometre} disabled={hours === 0 && minutes === 0 && seconds === 0} className='btn3'>
           Reset
         </button>
      </div>
    </div>
  );
}

export default App;
