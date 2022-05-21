import { delBasePath } from 'next/dist/shared/lib/router/router';
import React from 'react'

function MyCompanies() {

//   const deny = db.query('SELECT ip FROM iplist WHERE access = ?', [{access: 'deny'}], function (err, results) {
//     if(err) console.error(err);
//     res.json(results)
//     console.log(results)
//     const IPS = results.ip
// })

// // console.log(deny)
// const accessOptions = {
//   mode: 'deny',
//   denys: [],
//   allows: [],
//   forceConnectionAddress: false,
//   log: function(clientIp, access) {
//       console.log(clientIp + (access ? ' allowed.' : ' denied.'));
//   },

//   statusCode: 401,
//   redirectTo: '',
//   message: 'Unauthorized'
// };

// const app = ""

// // get IPs from the database push to new array
// let validIps = []; // Put your IP whitelist in this array
// function ipgetter () {
//     db.query('SELECT ip FROM iplist'), function (error, results){
//       if(!results) {
//         console.log(error)
//         return;
//       }
//       else {
//         validIps.push(results)
//       }
//     }
//   }

// // Custom Middleware assuming your using express and express sessions
// app.use((req, res, next) => {
//   ipgetter
//     if(validIps.includes(req.connection.remoteAddress)){
//         // IP is ok, so go on
//         console.log("IP ok");
//         if(req.session.usertype === "admin"){
//           console.log("Old mate is in!")
//           next();
//         }
//         else {
//           console.log("Nice try bud")
//           return;
//         }
//     }
//     else{
//         // Invalid ip
//         console.log("Bad IP: " + req.connection.remoteAddress);
//         return;
//     }
//   })





  return (
    <div><h1>My Companies</h1></div>
  )
}

// let app = "poo"


export default MyCompanies