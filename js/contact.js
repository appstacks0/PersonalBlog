function validateForm() {
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
}


function validateName() {
    let name = document.getElementById('name').value;
    let nameError = document.getElementById('name_error');

    if (name === '') {
        nameError.innerHTML = "Please fill out your name.";
    } else if (name.length > 100) {
        nameError.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        nameError.innerHTML = "";
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('email_error');

    if (email === '') {
        emailError.innerHTML = "Please fill out your email.";
    } else if (email.length > 100) {
        emailError.innerHTML = "Your email should not exceed 100 characters.";
    } else {
        emailError.innerHTML = "";
    }
}

function validateSubject() {
    let subject = document.getElementById('subject').value;
    let subjectError = document.getElementById('subject_error');

    if (subject === '') {
        subjectError.innerHTML = "Please fill out the subject.";
    } else if (subject.length < 50) {
        subjectError.innerHTML = "Subject should not shorter than 50 characters.";
    } else if (subject.length > 250) {
        subjectError.innerHTML = "Subject should not exceed 250 characters.";
    } else {
        subjectError.innerHTML = "";
    }
}

function validateMessage() {
    let message = document.getElementById('message').value;
    let messageError = document.getElementById('message_error');

    if (message === '') {
        messageError.innerHTML = "Please fill out the message.";
    } else if (message.length > 500) {
        messageError.innerHTML = "Message should not exceed 500 characters.";
    } else {
        messageError.innerHTML = "";
    }
}