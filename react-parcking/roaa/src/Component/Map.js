import React,{Component} from 'react';
import './Map.css' ;
export default class Map extends Component{

    render(){
        return (
          <>
          <h1>Each houres per  1jd </h1>
          <div className="grid">
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
         

          {/* <table  cellPadding="90px" fontSize="10px"  >
          <tr>
          <td style={{backgroundColor:"green"}} >1</td>
          <td style={{backgroundColor:"green"}}>2</td>
          <td style={{backgroundColor:"green"}}>3</td>
          <td style={{backgroundColor:"green"}}>4</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td style={{backgroundColor:"green"}}>5</td>
          <td style={{backgroundColor:"green"}}>6</td>
          <td style={{backgroundColor:"green"}}>7</td>
          <td style={{backgroundColor:"green"}}>8</td>
          </tr>
          </table> */}
          
          </>
        );
 }
 }
