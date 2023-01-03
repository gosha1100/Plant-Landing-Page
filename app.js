const contactForm = document.querySelector('.contact-form');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3005/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email versendet ^^');
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Etwas ist schief gelaufen!')
        }
    }

    xhr.send(JSON.stringify(formData))

})