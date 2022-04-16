    function validateForm() {
        let isValidName = validateName();
        let isValidEmail = validateEmail();
        let isValidSubject = validateSubject();
        let isValidMessage = validateMessage();

        let isValid = isValidName && isValidEmail && isValidSubject && isValidMessage;
        if (isValid) {
            alert("Thank you for contacting us.\nYour message has been successfully sent. We will contact you very soon!")
        }
        return isValid;
    }


    function validateName() {
        let nameLength = document.getElementById('name').value.trim().length;
        let nameError = document.getElementById('name_error');

        if (nameLength == 0) {
            nameError.innerHTML = "Please fill out your name.";
            return false;
        }
        if (nameLength > 100) {
            nameError.innerHTML = "Your name should not exceed 100 characters.";
            return false;
        }
        nameError.innerHTML = "";
        return true;
    }

    function validateEmail() {
        let emailValue = document.getElementById('email').value.trim();
        let emailLength = emailValue.length;
        let emailError = document.getElementById('email_error');

        document.getElementById('email').oninvalid

        if (emailLength == 0) {
            emailError.innerHTML = "Please fill out your email.";
            return false;
        }
        if (emailLength > 100) {
            emailError.innerHTML = "Your email should not exceed 100 characters.";
            return false;
        }
        let matchEmail = emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

        if (matchEmail == null) {
            emailError.innerHTML = "Your email is invalid.";
            return false;
        }
        emailError.innerHTML = "";
        return true;
    }

    function validateSubject() {
        let subjectLength = document.getElementById('subject').value.trim().length;
        let subjectError = document.getElementById('subject_error');

        if (subjectLength == 0) {
            subjectError.innerHTML = "Please fill out the subject.";
            return false;
        }
        if (subjectLength < 50) {
            subjectError.innerHTML = "Subject should not shorter than 50 characters.";
            return false;
        }
        if (subjectLength > 250) {
            subjectError.innerHTML = "Subject should not exceed 250 characters.";
            return false;
        }
        subjectError.innerHTML = "";
        return true;

    }

    function validateMessage() {
        let messageLength = document.getElementById('message').value.trim().length;
        let messageError = document.getElementById('message_error');

        if (messageLength == 0) {
            messageError.innerHTML = "Please fill out the message.";
            return false;
        }
        if (messageLength > 500) {
            messageError.innerHTML = "Message should not exceed 500 characters.";
            return false;
        }
        messageError.innerHTML = "";
        return true
    }