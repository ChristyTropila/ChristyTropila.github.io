const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');
const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});





app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});

app.post('/api/email', (req, res, next) => {
    const {name, email, message}=req.body
    const from='ctropilalakebeverage@gmail.com'
    const to="tropila04@gmail.com"
    const subject="Portfolio contact"

  const output= `<p> You Have a new Contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${name}</li>
    <li>Email ${email}</li>
    <li>Message: ${message}</li>
    </ul>
    `
sendGrid.setApiKey('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');
const sendEmail=(to, from, subject, text)=>{
    const msg={
        to,
        from,
        subject,
        html: text
    }

sendGrid.send(msg)
    .then(result => {
        res.status(200).json({
            success: true
        });

    })
    .catch(err => {
        console.log('error: ', err);
        res.status(401).json({
            success: false
        });

    });
}

  sendEmail(to, from, subject,output);
});


app.listen(3030, '0.0.0.0');