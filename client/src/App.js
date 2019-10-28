import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./Main/Components/Footer/index";
import Top from "./Main/Components/Top/index";
import Side from "./Main/Components/Side/index";
// import Chatbox from "./Main/Components/Chatbox/index";
import CardDeck from 'react-bootstrap/CardDeck';
// import Sideright from "./Main/Components/Sideright/index";



// import Chatrooms from "./Chatrooms/index";
import SignIn from "./SignIn/index";
// import SignUp from "./SignUp/index";


import React from 'react';



function App() {
  return (

     
  <div className="App">
 <Top /> 
      <CardDeck className="pt-5 mt-5 size mx-auto"> 
                <Side />
{/* top and side above need to be permnent as well as carddeck */}


          <SignIn />
         {/* <SignUp /> */}
         {/* <Chatrooms /> */}
        {/* <Chatbox /> */}
        {/* <Sideright />  */}
     </CardDeck> 
         {/* <Footer />      */}
       
 </div>
    
  );
}

export default App;
