import React,{Component} from 'react';
import './Map.css' ;
export default class Map extends Component{

  state={
    isvalid: this.props.isvalid
  }

    render(){
     // console.log(this.props.isvalid);
     // console.log(this.props.allpark)

        return (
          
          <>
          <h1>Each houres per  1jd </h1>

          <div className="grid" >

          {this.props.allpark.map((elem,key)=> <div key={key} className="item" id={elem.numpark} style={{
          backgroundColor: (elem.status) ? 'red' : 'green'
        }} >{elem.numpark}</div>   )    }

          </div>









          {/* <div className="grid">
           <div className="item">1</div>
           <div className="item">2</div>
           <div className="item">3</div>
           <div className="item">4</div>
           <div className="item">5</div>
           <div className="item">6</div>
           <div className="item">7</div>
           <div className="item">8</div>
           <div className="item">9</div>
          </div>
          */}

         
          
          </>
        );
 }
 }
