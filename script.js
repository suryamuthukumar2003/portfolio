function sendMail(){
    let parms={
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_e0wqs5q","template_flzf2ym",parms).then(alert("Email sent!!"));
}