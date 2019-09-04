import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  // 'https://s3-ap-southeast-1.amazonaws.com/motoristprod/uploads/redactor_rails/picture/data/1174/motorist-free-car-park-singapore-2018.jpg',
  'https://timisoaratourism.com/wp-content/uploads/2017/10/Parking.jpg',
  'https://image.shutterstock.com/image-photo/empty-parking-lots-aerial-view-450w-517779547.jpg',
  'https://image.freepik.com/free-photo/full-cars-car-parking_1426-1495.jpg'
];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
export default class Home extends Component {

  render() {
    
    return (
      <React.Fragment>
      
      <div className="container-fluid">
      <div className="row" style={{margin:"20px"}}>
      <nav className="nav nav-pills nav-justified">
      <div style={{marginRight:"800px",marginLeft:"50px"}}>
         <img src="https://cdn.dribbble.com/users/2486453/screenshots/5646776/sjoerdverbeek-schiphol-icondesign-large-parking.png"
          alt="logo" style={{width:"120px"}}></img>
      </div>
      <Link to='/login'>
         <div style={{marginRight:"15px",marginTop:'30px'}}>
         <button type="button" className="btn btn-primary btn-md" >LogIn</button>
         </div>
      </Link> 

      <Link to='/signup'>
         <div style={{marginRight:"15px",marginTop:'30px'}}>
         <button type="button" className="btn btn-primary btn-md">SignUp</button>
         </div>
      </Link>

      </nav>
      </div>
      <div className="row">
      <div className="col-12" style={{height:"400px",width:"1200px",marginTop:"5px"}}>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide" >
          {/* 'backgroundImage': `url(${slideImages[0]})`, */}
            <div style={{backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 1</span> */}
              <img src={`${slideImages[0]}`} width="1200px" height="400px" alt="logo"></img>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 2</span> */}
              <img src={`${slideImages[1]}`} width="1200px" height="400px" alt="logo"></img>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundRepeat:'no-repeat'}}>
              {/* <span>Slide 3</span> */}
              <img src={`${slideImages[2]}`} width="1200px" height="400px" alt="logo"></img>
            </div>
          </div>
        </Slide>
      </div>
      </div>
      
      </div>
      <div className="row">
        
      </div>
      </div>
        {/* <h1>Home</h1>
        
         <Link to='/login'>
         <button>LogIn</button>
         </Link> 

    
        
       <Link to='/signup'>
        <button>SignUp</button>
      </Link> */}

      </React.Fragment>
    );
  }
}