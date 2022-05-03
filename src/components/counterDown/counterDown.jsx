import { useState , useEffect } from 'react';
import PropTypes from 'prop-types';
import formatTime from '../formatTime.js'
import timeCalculator from '../timeCalculator'
import '../Conters.css'


const Countdown = function() {
    let initialTime = [0,1,15]
    const [time, setTime] = useState(initialTime)
    const [countState, setCountState] = useState("STOP")
    const [speedUp, setSpeedUp] = useState(1)
    const [message, setMessage] = useState("")

    useEffect(() => {
        if (countState === "RUN"){
            const timer = setTimeout(() => {
                if(!(time.every(item => item === 0))){ //detects when the counter reaches 0
                    setTime(timeCalculator(time, -1)); //reusing code on both counters
                }else{
                    pause()
                    setMessage("¡COMPLETED!")
                }
            }, 1000/speedUp);
            return () => clearTimeout(timer);
        }
      });
    //functions to manipulate the state of the conter component
    const start = () => {
        console.log("Runing!")
        setCountState("RUN")
    }
    const pause = () => {
        console.log("Paused!")
        setCountState("STOP")
    }
    const restart = () => {  // extra functionality to reset the counter
        console.log("Reset!")
        setMessage("")
        setCountState("STOP")
        setTime(initialTime)
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
      <h1>Counter Down</h1>
      <h2>{formatTime(time)}</h2>
      {
        message.length !== 1 &&
          <p className='msg' >{message}</p>
      }
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
