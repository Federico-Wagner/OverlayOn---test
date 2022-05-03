import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import formatTime from '../formatTime'
import timeCalculator from '../timeCalculator'
import '../Conters.css'


const Countdown = function() {
  let initialTime = [0,0,0]
  const [time, setTime] = useState(initialTime)
  const [countState, setCountState] = useState("STOP")
  const [speedUp, setSpeedUp] = useState(1)

  useEffect(() => {
    if (countState === "RUN"){
      const timer = setTimeout(() => {
        setTime(timeCalculator(time, +1));
      }, 1000/speedUp);
      return () => clearTimeout(timer);
    }
    });

  const start = () => {
      console.log("runing!")
      setCountState("RUN")
  }
  const pause = () => {
      console.log("Paused!")
      setCountState("STOP")
  }
  const restart = () => { // extra functionality to reset the counter
    console.log("reset!")
    setCountState("STOP")
    setTime([0,0,0])
    setSpeedUp(1)
  }
  const speed = () => { // extra functionality to accelerate the counter
    if(speedUp === 10){
      setSpeedUp(1)
    }else{
      setSpeedUp(10)
    }
  }

  return (
    <div className='counter'>
      <h1>Counter Up</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={start} className="start">Start</button>
      <button onClick={pause} className="pause">Pause</button>
      <button onClick={restart} className="reset">Reset</button>
      <button onClick={speed} className="speed">X10</button>
    </div>
  );
} 

Countdown.propTypes = {
    time: PropTypes.arrayOf(PropTypes.number),
  };
  Countdown.defaultProps = {
    time: [],
  };

export default Countdown
