

const db =require("../database")

let creatdefult = (cb) => {
  db.parkdata.create([
    {numpark: 1,
    status: false},
   { numpark: 2,
    status: false},
    {numpark: 3,
    status: false},
    {numpark: 4,
    status: false},
    {numpark: 5,
    status: false},
    {numpark: 6,
    status: false},
    {numpark: 7,
    status: false},
    {numpark: 8,
    status: false},
    {numpark: 9,
      status: false}],
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}


///////hala
let getallpark = (cb) => {
db.parkdata.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      console.log("_______________________________________________")
      cb(data);
    }
  });

  }







    ///////roaa
    let getfalse = (cb) => {
      db.parkdata.find({status: false}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          cb(data);
        }
      });
    };




  
  
    let  updatepark = (cb,isvalid,statuss) => {
      console.log(isvalid, statuss);

      db.parkdata.updateMany( {numpark:isvalid} ,  { $set: { status:statuss }}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          console.log("_______________________________________________")

          getallpark(cb);
        }
      });
    };



    // let updatepark = (cb,isvalid,statuss) => {
    //   console.log(isvalid, statuss);

    //   console.log(db.parkdata);
    //   db.parkdata.updateMany({numpark: "1"}, {$set: {status: true}}, (err, data) => {
    //     if(err) cb(err);
    //     else {
    //       console.log('abd',  data);
    //       getallpark(cb);
    //     }
    //   } )

     
    // };








  // let creatpark = (cb) => {
  //   db.userdata.create({ numpark: 2,
      // status: true},
  //      (err, data) => {
  //     if (err) {
  //       cb(err)
  //     } else {
  //       cb(data)
  //     }
  //   })
  // }




 


  module.exports = {
    /////hala
    getallpark,
    //creatpark,
    creatdefult,
////roaa
    getfalse,
    updatepark
   
  }
