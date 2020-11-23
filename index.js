// const http=require('http');
// const port=8000;
// const express=require('express');
// const app=express();
// const fs=require('fs');
// app.listen(port,function(err){
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("server is up and running on port",port);
// })
const express = require("express");
const { spawn } = require("child_process");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  var dataToSend;
  console.log("hi");
  const python = spawn("python", [
    "script.py",
    "runny_nose",
    "chest_pain",
    "mild_fever",
    "loss_of_smell",
    "belly_pain",
  ]);
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(dataToSend);
  });
});
app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);
