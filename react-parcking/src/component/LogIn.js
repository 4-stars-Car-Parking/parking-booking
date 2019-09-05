import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

export default class LogIn extends Component {

  state={
    Name:"",
    Password:""
  };

  changeValue =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  cleanInput = () => {
    this.setState({ Name: "",Password:"" });
  };
 
  render() {
  
    return (
      <React.Fragment>
      
          <div className="d-flex flex-column align-items-center" style={{marginTop:'120px'}}>
          <div className="form-group w-25">
            <input type="text" className="form-control" name="Name" 
            value={this.state.Name} onChange={this.changeValue} placeholder="Enter Name ..." />
          </div>

        
          <div className="form-group w-25">
            <input type="password" name="Password"
             value={this.state.Password} className="form-control" 
             onChange={this.changeValue} placeholder=" Enter Password ..." />
          </div>

          {/* <Link to={this.props.linkLogin}> */}
          <button type="submit" onClick={
              this.props.getUser.bind(
              this,
              this.state.Name,
              this.state.Password,
              this.cleanInput
            )
                            }
                               className="btn btn-primary">LogIn</button>
          {/* </Link> */}
          </div>
         
      </React.Fragment>
    );
  }
}