import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Community from "./pages/Community/Community"
import NoMatch from "./pages/NoMatch/NoMatch";
import Main from "./pages/Main/Main";
// import axios from "axios";


class App extends Component {

  state = {
    userInfo: {}
  }


  // componentDidMount() {
  //   this.checkUser();
  // }

  // checkUser = () => {
  //   axios.get('/authentication/isauth')
  //     .then(res => {
  //       console.log(res)
  //       if (res.data.user) {
  //         this.setState({
  //           loggedIn: true
  //         })
  //         console.log(this.state)
  //       } 
  //     })
  // }

  // userInfo = (userInfo) => {
  //   console.log(userInfo)
  //   axios.post("/authentication/signin", userInfo)
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data);
  //       this.setState({userInfo: response})
  //       // this.props.history.push("/");
  //       // return <Redirect to="/" />
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       alert('Login Failed')
  //     })
  // }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin"  render={() => <SignIn userInfo={this.userInfo}/>} /> */}
            {/* {this.state.loggedIn? 
              <Route exact path="/" component={Main} /> : <Redirect from="/" to="/signin" />}  */}
            {/* <Route exact path="/community/:id" component={Community} />
            <Route component={NoMatch} /> */}
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/community/:id" component={Community} />
            <Route component={NoMatch} />
          </Switch>
          {/* <button onClick={this.checkUser}>Check User</button> */}
        </div>
      </Router>
    );
  }
}




export default App;
