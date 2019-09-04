import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import ParkTable from './ParkTable';
import UserTable from './UserTable ';
  class Tables extends Component {
    state={
      
    }

render() {
  
  return(
  <>
  <Router>
   <div style={{fontSize:"20px"}}> <Link to="usertable" > usertable</Link> </div>
   <div style={{fontSize:"20px"}}><Link to="parktable">parktable</Link></div>
    <Route path="/usertable" component={UserTable} />
    <Route path="/parktable" component={ParkTable} />
    </Router>
  </>
  )
}
  }
  export default Tables;