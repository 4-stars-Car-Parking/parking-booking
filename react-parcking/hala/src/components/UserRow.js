import React, { Component } from 'react';
  class UserRow extends Component {
    state={
      
    }

render() {
  
  return(
  <>
<tr>
      <td style={{ border: "1px solid black"}}> {this.props.user.id}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.name}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.car_number}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.balance}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.reservation}</td>
      <td style={{ border: "1px solid black"}}> {this.props.user.phone_num}</td>
    

        </tr>
</>
);
  }  
}
export default UserRow;