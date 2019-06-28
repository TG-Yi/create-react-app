import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./app.sass"
import "./app.less"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="app1">中文书写：sass测试</p>
        <p className="app2">中文书写：scss测试</p>
        <p className="app">中文书写：less测试</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
