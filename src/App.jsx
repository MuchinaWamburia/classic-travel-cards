import React  from 'react';
// import {  BrowserRouter,  Route,  Link} from "react-router-dom";
import  './App.css';
import CardContainer from './Components/CardContainer';

function App(){
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
    < CardContainer  />
      </div>
    </div>
  );
}

export default App;