const http=require('http');
const port=8000;
const express=require('express');
const app=express();
const fs=require('fs');
app.listen(port,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("server is up and running on port",port);
})