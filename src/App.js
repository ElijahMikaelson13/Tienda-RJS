import Header from './components/header';
import Navbar from './components/Navbar';
import Cartwidget from './components/Cartwidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
       
      </Header>
      <Navbar>
        <Cartwidget />
        <logo> </logo>
      </Navbar>
      { /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div> 
); 
}

export default App;
