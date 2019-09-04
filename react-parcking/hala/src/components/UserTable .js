import React, { Component } from 'react';
import UserRow from './UserRow.js';

  class UserTable extends Component {
    state ={
      user: [
        {
         id:1,
         name:"hala",
         car_number:1233456,
         balance:100,
         reservation:2,
         phone_num:533231
       },
       {
         id:2,
         name:"noor",
         car_number:133456,
         balance:20,
         reservation:6,
         phone_num:533239
       },
       {
         id:3,
         name:"alaa",
         car_number:123456,
         balance:10,
         reservation:1,
         phone_num:593731
       }
   
     ]
     };
  render() {
  
    return (
    <>
    <h1 style={{marginTop:"12px"}}>User Tabel</h1>
<table className="table table-striped" style={{ marginTop:"10px"}}  >
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Name</th>
      <th scope="col">car_number</th>
      <th scope="col">balance</th>
      <th scope="col">reservation</th>
      <th scope="col">Phone_Number</th>
    </tr>
  </thead>
  
  {this.state.user.map(elem=><UserRow  user={elem} Add={this.props.Add}/>)  }
</table>

   </>   
    ); 
  }
  
}

export default UserTable;

