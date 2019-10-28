import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Main/Components/Footer/index";
import Top from "./Main/Components/Top/index";
import Side from "./Main/Components/Side/index";
import Chatbox from "./Main/Components/Chatbox/index";
import CardDeck from 'react-bootstrap/CardDeck';
import Sideright from "./Main/Components/Sideright/index";

import React from 'react';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

     
  <div className="App">
<Top /> 
        <CardDeck className="pt-5 mt-5 size mx-auto">
        
        <Side />
        <Chatbox />
        <Sideright />
        </CardDeck>
        <Footer />   
       
 </div>
    
  );
}

export default App;
