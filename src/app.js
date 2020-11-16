// Imports
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const e = require('express')
const fs = require('fs')
const {sendEmail} = require("./emails/message")

// Define paths
const publicDirectory = path.join(__dirname,'../public')
const viewsDirecory = path.join(__dirname,'../templates/views')
const partialsDirecory = path.join(__dirname,'../templates/partials')

// Instantiate the server
const app = express()

// Get port number
const port = process.env.PORT || 3000 // Set by heroku, default to 3000 locally

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsDirecory)
hbs.registerPartials(partialsDirecory)

// Setup static directory to serve
app.use(express.static(publicDirectory))

// This will never be seen as when static server is set up
app.get('',(req,res)=>{
    res.render('index',{
        // title:'Weather Application',
        // name:'Matthew Lock'
    })
})

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

app.get('/imareport',(req,res)=>{
    const file= path.join(__dirname,'../public/pdfs/IMA_YODA_Final_Report.pdf')
    console.log(file)
    var data =fs.readFileSync(file);
    res.contentType("application/pdf");
    res.send(data);
})

app.get('/musicspeechreport',(req,res)=>{
    const file= path.join(__dirname,'../public/pdfs/Speech_Music_Discrimination_LCKMAT002_GDFLAW001.pdf')
    console.log(file)
    var data =fs.readFileSync(file);
    res.contentType("application/pdf");
    res.send(data);
})



app.get('/cv',(req,res)=>{
    const file= path.join(__dirname,'../public/pdfs/cv.pdf')
    console.log(file)
    var data =fs.readFileSync(file);
    res.contentType("application/pdf");
    res.send(data);
})

// Start server
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})