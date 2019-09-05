import React, { Component } from 'react';


export default class SignUp extends Component {

  state = {
    Name: "",
    Phone: "",
    Balance: "",
    Password: "",
    validation: {

      Name: /^[a-zA-Z]{3,}$/,
      Phone: /^[0-9]{10}$/,
      Password: /^[a-zA-Z0-9]{5,15}$/,
      Balance: /^[0-9]{1,3}$/
    },
    isValidName: false,
    isValidPhone: false,
    isValidPassword: false,
    isValidBalance: false

  };

  changeValue = (e) => {
    console.log(this.state.validation[e.target.name].test(e.target.value))

    this.setState({
      [e.target.name]: e.target.value,
      [`isValid${e.target.name}`]: this.state.validation[e.target.name].test(e.target.value)
    })

    console.log(this.state.isValidName)
  }

  cleanInput = () => {
    this.setState({ Name: "", Phone: "", Balance: "", Password: "" });
  };

  render() {

    return (
      <React.Fragment>



        <div className="d-flex flex-column align-items-center" style={{ marginTop: '120px' }}>
          <div className="form-group w-25">
            <input type="text" name="Name" value={this.state.Name} className="form-control input_filed"
              onChange={this.changeValue} placeholder="Enter Name ..." required />

            <p>{this.state.isValidName ? "" : <div class="alert alert-primary" role="alert">
              Not Valid Name
                            </div>} </p>

          </div>

          <div className="form-group w-25">
            <input type="tel" name="Phone" value={this.state.Phone} className="form-control input_filed"
              onChange={this.changeValue} placeholder="Enter Phone Number ..." required />

              <p>{this.state.isValidPhone ? "" : <div class="alert alert-primary" role="alert">
              Not Valid Name
                            </div>} </p>
          </div>

          <div className="form-group w-25">
            <input type="text" name="Balance" value={this.state.Balance} className="form-control input_filed"
              onChange={this.changeValue} placeholder="Enter Balance ..." required />
              <p>{this.state.isValidBalance ? "" : <div class="alert alert-primary" role="alert">
              Not Valid Name
                            </div>} </p>
          </div>

          <div className="form-group w-25">
            <input type="password" name="Password" value={this.state.Password} className="form-control input_filed"
              onChange={this.changeValue} placeholder=" Enter Password ..." required />
              <p>{this.state.isValidPassword ? "" : <div class="alert alert-primary" role="alert">
              Not Valid Name
                            </div>} </p>
          </div>



          <button type="submit"
            onClick={
              (this.state.isValidName &&
                this.state.isValidPhone &&
                this.state.isValidBalance &&
                this.state.isValidPassword)
                ?
                this.props.postUser.bind(
                  this,
                  this.state.Name,
                  this.state.Phone,
                  this.state.Balance,
                  this.state.Password,
                  this.cleanInput
                ) : ""}
            className="btn btn-primary">SignUp</button>


        </div>


      </React.Fragment>
    );
  }
}