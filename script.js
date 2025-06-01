function sendEmail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_6b669wf","template_trc6qco",parms).then(alert("Email sent successfully!"))
}