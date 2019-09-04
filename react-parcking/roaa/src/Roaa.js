import React,{Component} from 'react';
import Form  from './Component/Form';
import Map from './Component/Map';
import axios from 'axios'

export default class Roaa extends Component{
  state={
    data:[],
    
  }

 getPark=()=>{
  axios.get("http://localhost:9000/park/false")
   .then(res=>{
   this.setState({
   data:res.data
   })
   if(this.state.data.length>0)
   {

     let isvalid =! this.state.isvalid
     this.setState({
      isvalid:isvalid.data[0] 
     })
     console.log("can pull down in parking")
    //  console.log(this.state.data[0])
   }
   else
   { 
    console.log("asdfgh")
   }
   })
 }


 updatastate=()=>{
   axios.put("http://localhost:9000/park/")
   .then(res=>{
     this.setState({
       data:res.data
     })
   })
   .catch(error => {
    console.log(error);
  });
  }

  updateblance=()=>{
    axios.put("http://localhost:9000/user/")
    .then(res=>{
     this.setState({
       data:res.data
     })
     let money= this.state.data.balance
      if(money > 0)
      {
        console.log("rftt")

        money= money-(this.state.time*1)
        console.log("rftt")

      }
      else{
        alert("you can any thing")
      }
    })
  }
  

   
  




  //  booking2=()=>{
  //   if(park.Isvalid==true){
  //     console.log("erfgtfg")
  //   }

  //   else
  //   {
  //     console.log("ffff")

  //   }
  //  }


//    booking2=(number)=>{
//  if(this.state.number===this.state.park.id )
//    {
//      console.log("fffff")
//    }
//    else
//    {
//     console.log("gfgfgfg")
//   }
// }
   
// booking2=(number)=>{
//   let avalibleparking=this.state.park.map(number=>{
//   //  return this.state.number ===this.state.park.id
//   if(number ===this.state.park.id){
//    console.log("tohthoghl")
//   }
//  })
//  return avalibleparking
// }

 
  render(){
  return (
    <>
        <Map/>
    <Form getPark={this.getPark} updatastate={this.updatastate}  updateblance={this.updateblance} />
    </>
  );
}
}

