function validateForm() {
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
}


function validateName() {
    let nameLength = document.getElementById('name').value.trim().length;
    let nameError = document.getElementById('name_error');

    if (nameLength == 0) {
        nameError.innerHTML = "Please fill out your name.";
    } else if (nameLength > 100) {
        nameError.innerHTML = "Your name should not exceed 100 characters.";
    } else {
        nameError.innerHTML = "";
    }
}

function validateEmail() {
    let emailLength = document.getElementById('email').value.trim().length;
    let emailError = document.getElementById('email_error');

    if (emailLength == 0) {
        emailError.innerHTML = "Please fill out your email.";
    } else if (emailLength > 100) {
        emailError.innerHTML = "Your email should not exceed 100 characters.";
    } else {
        emailError.innerHTML = "";
    }
}

function validateSubject() {
    let subjectLength = document.getElementById('subject').value.trim().length;
    let subjectError = document.getElementById('subject_error');

    if (subjectLength == 0) {
        subjectError.innerHTML = "Please fill out the subject.";
    } else if (subjectLength < 50) {
        subjectError.innerHTML = "Subject should not shorter than 50 characters.";
    } else if (subjectLength > 250) {
        subjectError.innerHTML = "Subject should not exceed 250 characters.";
    } else {
        subjectError.innerHTML = "";
    }
}

function validateMessage() {
    let messageLength = document.getElementById('message').value.trim().length;
    let messageError = document.getElementById('message_error');

    if (messageLength == 0) {
        messageError.innerHTML = "Please fill out the message.";
    } else if (messageLength > 500) {
        messageError.innerHTML = "Message should not exceed 500 characters.";
    } else {
        messageError.innerHTML = "";
    }
}

function onSubmit() {
    alert("Success!");
}