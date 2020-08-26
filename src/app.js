// Imports
const express = require('express')
const path = require('path')

// Define paths
const publicDirectory = path.join(__dirname,'../public')

// Instantiate the server
const app = express()

// Get port number
const port = process.env.PORT || 3000 // Set by heroku, default to 3000 locally

// Setup static directory to serve
app.use(express.static(publicDirectory))

// Start server
app.listen(port,()=>{
    console.log('Server is up on port '+port)
})