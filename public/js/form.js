// Onclick listener
const messageForm = document.querySelector('form')
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
// // const message = document.querySelector(.ClassName)
// const message = document.querySelector("#message-1")
// const forecastMessage = document.querySelector("#message-2")

messageForm.addEventListener('submit', (e) => {
    e.preventDefault() // Prevent refresh

    var form = document.getElementById('contact-form');
    if (!form.checkValidity()) {
        // Create the temporary button, click and remove it
        var tmpSubmit = document.createElement('button')
        form.appendChild(tmpSubmit)
        tmpSubmit.click()
        form.removeChild(tmpSubmit)

    } else {
        // Form is valid, do whatever you like

        // Check all required info
        // if (!name.value) {
        //     name.placeholder = "Please enter your name!"
        //     $('#name').addClass('error');
        // }

        // if (!email.value) {
        //     email.placeholder = "Please enter your email!"
        //     $('#email').addClass('error');
        // }

        // if (!subject.value) {
        //     subject.placeholder = "Please enter your subject!"
        //     $('#subject').addClass('error');
        // }

        // if (!message.value) {
        //     message.placeholder = "Please enter a message!"
        //     $('#message').addClass('error');
        // }

        // Stop execution
        if (!name.value || !email.value || !subject.value || !message.value) {
            return null
        }

        const url = '/message?name=' + (name.value) + "&email=" + (email.value) + "&subject=" + (subject.value) + "&message=" + (message.value);
        console.log(url)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    alert("Something went wrong the message was not delivered...")
                } else {
                    alert('Message Sent!')
                    name.value = ""
                    email.value = ""
                    subject.value = ""
                    message.value = ""
                }
            })
        })

    }



})

name.onclick = function (event) {
    name.placeholder = "Your Name*"
    $('#name').removeClass('error');
}

email.onclick = function (event) {
    email.placeholder = "Your Email*"
    $('#email').removeClass('error');
}

subject.onclick = function (event) {
    subject.placeholder = "Your Subject*"
    $('#subject').removeClass('error');
}

message.onclick = function (event) {
    message.placeholder = "Your Message*"
    $('#message').removeClass('error');
}