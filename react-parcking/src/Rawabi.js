import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import axios from 'axios';
import UserAccount from './component/UserAccount';
/////roaa
import Form from './component/Form';
import Map from './component/Map';
/////// hala
import ParkTable from './component/ParkTable';
import UserTable from './component/UserTable ';
import LogInadmn from './component/LogInadmn';
import Tables from './component/Tables';



export default class Rawabi extends Component {
  state = {
    user: [],
    linkLogin: "/map",
    linkSignUp: "/",


    ////roaa
    allpark: [],
    data: [],
    isvalid: null,
    status: null,
    d: 10,
    //myVar: null,

    ///hala
    Name: "hala",
    Password: "123456",
    park: []

  };

  ///////////////rawbi
  //SignUp page
  postUser = (name, phone, balance, password, cleanInput, move) => {
    console.log("postUser")
    axios
      .post(`http://localhost:9000/user/${name}/${phone}/${balance}/${password}`)
      .then(response => {
        this.setState({ user: response.data });
        window.location = this.state.linkSignUp;
      });
    cleanInput()
    // move()
  };


  //Login page
  getUser = (name, password, cleanInput) => {
    console.log("getUser")
    axios.get(`http://localhost:9000/user/${name}/${password}`)
      .then(response => {
        this.setState({ user: response.data });
        if (this.state.user.length > 0) {
          console.log("in if")
          window.location = this.state.linkLogin;
        }
        console.log(this.state.linkLogin)
        // this.setState({linkLogin:"/useraccount"})
        console.log(this.state.linkLogin)

        console.log(response.data)
      });

    cleanInput()
  };




  ////////// roaa
  componentDidMount() {
    axios.get("http://localhost:9000/park/all")
      .then(res => {
       // console.log("res.data", res.data)

        this.setState({
          allpark: res.data
        })
       // console.log(this.state.allpark);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // myTimer = (t) => {
  //   console.log(t )

  //   //(this.state.d)-1;
  //   //this.setState({d: (this.state.d ) - 1}) 
  //   t=t-1
  //   console.log(this.state.d )
  //   // console.log(this.getPark.t)
  //   // console.log("inside time",this.state.myVar)
  //   if (t === 0) {

  //     axios.put(`http://localhost:9000/park/false/${this.state.isvalid}/${!(this.state.status)}`)
  //       .then(res => {
  //         console.log("update  false", res.data)

  //         this.setState({
  //           allpark: res.data
  //         })
  //         console.log("allpark after updat", res.data)
  //       })
  //     clearInterval(this.state.myVar);
  //   }

  // }

  getPark = () => {
    axios.get("http://localhost:9000/park/false")
      .then(res => {
        //console.log("get park false")

        this.setState({
          data: res.data
        })
        //console.log(this.state.data);

        if ((this.state.data.length) > 0) {

         // console.log("data.length)>0", this.state.data[0])

          this.setState({
            isvalid: this.state.data[0].numpark,
            status: this.state.data[0].status
          })
         // console.log(this.state.isvalid);
         // console.log(this.state.status);
          alert(`Place # ${this.state.isvalid} has been booked for you
     Try to reach the site within ten minutes or the reservation will be canceled`)


          axios.put(`http://localhost:9000/park/false/${this.state.isvalid}/${!(this.state.status)}`, )
            .then(res => {
            //  console.log("allpark after updat", res.data)
             // console.log("update park{0} to true", this.state.isvalid, this.state.status)

              this.setState({
                allpark: res.data
              })
            //  console.log("res.data after updat", res.data);
            //  console.log("allpark after updat", this.state.allpark);

            })
            .catch(error => {
              console.error("react", "not complet up")
            });


            //this.setState({myVar : setInterval(this.myTimer(), 1000)}) 

           // setInterval(this.myTimer(10), 2000)

          let myVar = setInterval(() => {
              //console.log(t )
          
              //(this.state.d)-1;
              this.setState({d: (this.state.d ) - 1}) 
              //t=t-1
              console.log(this.state.d )
              // console.log(this.getPark.t)
              // console.log("inside time",this.state.myVar)
              if (this.state.d === 0) {
          
                axios.put(`http://localhost:9000/park/false/${this.state.isvalid}/${!(this.state.status)}`,)
                  .then(res => {
                    console.log("update  false", res.data)
          
                    this.setState({
                      allpark: res.data
                    })
                    console.log("allpark after updat", res.data)
                  })
                clearInterval(myVar);
              }
          
            },1000)

         //this.state.myVar = setInterval(this.myTimer(10), 1000);

        // this.setState({myVar : setInterval(this.myTimer(10), 1000)}) 
          //let myVar = setInterval(this.myTimer(10), 1000);

         // console.log("myvar", this.state.myVar)

        }
        else {
          console.log("data.length)==0 => no true");
          alert(`!!!!!!!!! sorry
          the park is fall`)

        }
      })
  };

  cleartime = () => {
    clearInterval(this.state.myVar);
  }

  ////////// hala
  getTablesPark = () => {
    axios
      .get("http://localhost:9000/park/all")
      .then(result => {
        this.setState({
          park: result.data
        });
      })

  }

  render() {
    return (
      <React.Fragment>

        <Router>
          {/* rawabi */}
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={() => <SignUp postUser={this.postUser} />} />
          <Route path='/login' component={() => <LogIn getUser={this.getUser} />} />
          <Route path='/useraccount' component={() => <UserAccount />} />
          {/* hala */}
          <Route path="/loginadmin" component={() => <LogInadmn Name={this.state.Name} Password={this.state.Password} />} />
          <Route path="/usertable" component={UserTable} />
          <Route path="/parktable" component={() => <ParkTable user={this.state.park} />} />
          <Route path="/tables" component={Tables} />

          {/* roaa */}
          <Route path="/map" component={() => <Form getPark={this.getPark} cleartime={this.cleartime} />} />
          <Route path="/map" component={() => <Map allpark={this.state.allpark} isvalid={this.state.isvalid} />} />
        </Router>

        {/* <Map/>
    <Form getPark={this.getPark} updatastate={this.updatastate}  updateblance={this.updateblance} /> */}



      </React.Fragment>
    );
  }
}

