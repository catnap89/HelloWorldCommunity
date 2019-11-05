import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Top from "../../components/Top"; // Navbar
// import CardDeck from 'react-bootstrap/CardDeck';
// import Side from "../../components/Side";
// import Chatbox from "../../components/Chatbox";
// import Sideright from "../../components/Sideright";


class Main extends Component {
  // Not sure what to have in the states yet.
  state = {
    userInfo: {},
    communities: []
  };

  // make a request to the backend and check if the req.user object is not null
  // if it's not null, then send that object back and use it on the frontend

  // use request.user if is null (false), then send 403. which is going to cause catch on axios
  // props.history,sometihnfskdnf to sign i

  componentDidMount() {
    this.checkUser();
  }


  // checkUser = () => {
  //   axios.get('/auth/isauth')
  //     .then(res => {
  //         console.log(res.data);
  //         this.setState({
  //           userInfo: res.data.user
  //         })
  //         console.log(this.state.userInfo);
  //       })
  //     .catch(error => {
  //       // console.log("error: " + error.response.data.message);
  //       // this.setState({
  //       //   errorMessage: error.response.data.message
  //       console.log(error);
  //       this.props.history.push("/login");
  //     })
  // }

  checkUser = () => {
    axios.get('/auth/isauth')
      .then(res => {
        console.log("res: " + res.data.user.username);
        if (res.data.user) {
          return this.setState({
            userInfo: res.data || {}
          });
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(error => {
        // console.log("error: " + error.response.data.message);
        // this.setState({
        //   errorMessage: error.response.data.message
        console.log(error);
        this.props.history.push("/login");
      })
  }

  render() {
    return (
      <div className="App">
      <Top />
        <h1>Main Page</h1>  
        <br />
        <br />
        <br />
        <button onClick={this.checkUser}>Check User</button>
        <p>Hello, {this.state.userInfo.username}</p>
      </div>
    );
  }
}

export default Main;
