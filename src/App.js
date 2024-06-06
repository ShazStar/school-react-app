import logo from './logo.svg';
import './App.css';
import RGBPanel from './components/RGB/RGBPanel';
import Calculator from './components/Calc/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React!</p>
        <p1>資工四乙 4A9G0092 林懷恩</p1>
        <RGBPanel />
        <p2>計算機</p2>
        <Calculator />
        <a
          className="App-link"
          href="https://shazstar.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Website.
        </a>
      </header>
    </div>
  );
}

export default App;
