import React, { Component } from 'react';
import ParkRow from './ParkRow';

  class Tabel extends Component {
    state ={
     
     };
  render() {
     const { user } = this.props;
   
    return (
    <>
    <h1>Park Tabel</h1>
<table className="table table-striped"style={{ marginTop:"80px"}}>
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">number Park</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {user.map((user,index)=> {
    return(
    <ParkRow 
    key={index}  
    number={index+1}
    user={user}/>
    ); 
      })
    }   
    
    </tbody>
</table>
   </>   
   
    ); 
  }
  
}

export default Tabel;

