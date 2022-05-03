import logo from './logo.svg';
import './App.css';
import CountDown from './components/counterDown/counterDown'
import CountUp from './components/counterUp/counterUp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <CountDown/>
          <CountUp/>
      </header>
    </div>
  );
}

export default App;
