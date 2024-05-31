const express=require('express');
const app=express();
const bodyParser=require('body-parser');


const {PORT}=require('./config/serverConfig');
// const {sendBasicEmail}=require('./services/email-service');
const TicketController=require('./controllers/ticket-controller');
const jobs=require('./utils/job')

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'dphoenix346@gmail.com',
        //     'This is a testing email',
        //     'Hello ,How are you. I hope you like our support'
        // );
    })
}

setupAndStartServer();