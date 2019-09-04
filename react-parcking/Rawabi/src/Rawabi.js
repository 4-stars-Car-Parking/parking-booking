import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import axios from 'axios';
import UserAccount from './component/UserAccount';

export default class Rawabi extends Component {
  state = {
    user:[],
    linkLogin:"/useraccount"
  };

  //SignUp page
  postUser = (name, phone, balance ,password,cleanInput,move) => {
    console.log("postUser")
    axios
      .post(`http://localhost:9000/user/${name}/${phone}/${balance}/${password}`)
      .then(response => {
        this.setState({ user: response.data });
        
      });
      cleanInput()
     // move()
  };


  //Login page
  getUser = (name,password,cleanInput) => {
    console.log("getUser")
    axios.get(`http://localhost:9000/user/${name}/${password}`)
    .then(response => {
      this.setState({ user: response.data });
      if(this.state.user.length > 0 ){
        console.log("in if")
        window.location=this.state.linkLogin;
      }
      console.log(this.state.linkLogin)
      // this.setState({linkLogin:"/useraccount"})
      console.log(this.state.linkLogin)

      console.log(response.data)
    });
    
    cleanInput()
  };

  
  render() {
    return (
      <React.Fragment>

         <Router>
          <Route path='/' exact component={Home} /> 
          <Route path='/signup' component={() => <SignUp postUser={this.postUser} />} />
          <Route path='/login' component={() => <LogIn getUser={this.getUser} />} />
          <Route path='/useraccount' component={() => <UserAccount  />} />
        </Router>
       
      </React.Fragment>
    );
  }
}

