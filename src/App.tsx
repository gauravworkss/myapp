import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyApp from './Myapp';
import { listItems } from './Product';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <MyApp></MyApp>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default App;
