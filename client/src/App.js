import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Top from "./components/Top"; // Navbar
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Community from "./pages/Community/Community"
import NoMatch from "./pages/NoMatch/NoMatch";

// import Side from "./Main/Components/Side/index";
// import CardDeck from 'react-bootstrap/CardDeck';

function App() {
  return (
    <Router>
      <div>
        {/* <Top /> */}
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          {/* <Route exact path="/main" component={Main} /> */}
          <Route exact path="/community/:id" component={Community} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// function App() {
//   return (

     
//   <div className="App">
//  <Top /> 
//       <CardDeck className="pt-5 mt-5 size mx-auto"> 
//                 <Side />
// // {/* top and side above need to be permnent as well as carddeck */}


//           <SignIn />
//          <SignUp /> */}
//          <Chatrooms />
//         <Chatbox />
//         {/* {/* <Sideright />  */}
//      </CardDeck> 
//          <Footer />     
       
//  </div>
    
//   );
// }

export default App;
