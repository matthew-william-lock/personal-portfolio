// Imports
const express = require('express')
const path = require('path')
const e = require('express')
const fs = require('fs')
const {sendEmail} = require("./emails/message")

// Define paths
const publicDirectory = path.join(__dirname,'../public')

// Instantiate the server
const app = express()

// Get port number
const port = process.env.PORT || 3000 // Set by heroku, default to 3000 locally

// Setup static directory to serve
app.use(express.static(publicDirectory))

app.post('/message',(req,res)=>{ 

    const name = req.query.name
    const email = req.query.email
    const subject = req.query.subject
    const message = req.query.message

    console.log(name,email,subject,message)

    if(!name || !email || !subject || !message){
        return res.send({
            error:'something went wrong!'
        })
    }

    try{
        sendEmail(name,email,subject,message)
        return res.send({
            message:"Success!"
        })
    } catch(e) {
        console.log(e)
        return res.send({
            error:'something went wrong!'
        })
    }


})

app.get('/designreport',(req,res)=>{
    const file= path.join(__dirname,'../public/pdfs/report.pdf')
    console.log(file)
    var data =fs.readFileSync(file);
    res.contentType("application/pdf");
    res.send(data);
})

// Start server
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})