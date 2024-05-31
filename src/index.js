const express=require('express');
const app=express();
const bodyParser=require('body-parser');


const {PORT}=require('./config/serverConfig');
// const {sendBasicEmail}=require('./services/email-service');

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
        // sendBasicEmail(
        //     'support@admin.com',
        //     'dphoenix346@gmail.com',
        //     'This is a testing email',
        //     'Hello ,How are you. I hope you like our support'
        // );
    })
}

setupAndStartServer();