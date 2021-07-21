// Import mail provider
const sgMail = require('@sendgrid/mail')

const apiKey = process.env.SENDGRID_API_KEY

// Set API key
sgMail.setApiKey(apiKey)

const sendEmail = (name,email, subject, message) =>{
    sgMail.send({
        to:'matthewwilliamlock@gmail.com',
        from:'matthewwilliamlock@gmail.com',
        subject:subject,
        text:message+"\nThis email has by "+name+" at "+email
        // html:"html here"
    })
}

module.exports = {
    sendEmail
}