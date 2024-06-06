import logo from './logo.svg';
import './App.css';
import RGBPanel from './RGBPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!</p>
        <p1>資工四乙 4A9G0092 林懷恩</p1>
        <a
          className="App-link"
          href="https://shazstar.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Website.
        </a>
        <RGBPanel />
      </header>
    </div>
  );
}

export default App;
