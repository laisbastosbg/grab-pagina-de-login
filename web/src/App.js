import logo from './logo.svg';
import './App.css';

import Item from './components/ListItems/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React - Using Relative Path</h1>
      </header>
      <p className="App-intro">
        <Item />
      </p>
    </div>
  );
}

export default App;
