function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    subject : document.getElementById("subject").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("porfolio_webmessages","template_lzwmz7g",parms).then(alert("Email Sent!!"))
}
