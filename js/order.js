function validateForm() {
    validateFood();
    validateName();
    validateNote();
    validateDate();
    validateAddress();
}

function validateFood() {
    let food = document.getElementById('food').value;
    let foodError = document.getElementById('food_error');


    if (food === '') {
        foodError.innerHTML = "Please select our product.";
    } else {
        foodError.innerHTML = "";
    }
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

function validateNote() {
    let note = document.getElementById('note').value.trim();
    let noteError = document.getElementById('note_error');

    if (note.length > 30) {
        noteError.innerHTML = "Message should not exceed 30 characters.";
    } else {
        noteError.innerHTML = "";
    }
}

function validateDate() {
    let date = document.getElementById('date').value;
    let dateError = document.getElementById('date_error');

    if (date.length == 0) {
        dateError.innerHTML = "Please fill out the deliver date.";
    } else if (new Date(date).getTime() < new Date().getTime()) {
        dateError.innerHTML = "Delivery date must not be in the past.";
    } else {
        dateError.innerHTML = ""
    }

}

function validateAddress() {
    let addressLength = document.getElementById('address').value.trim().length;
    let addressError = document.getElementById('address_error');

    if (addressLength == 0) {
        addressError.innerHTML = "Please fill out the address.";
    } else if (addressLength > 500) {
        addressError.innerHTML = "Address should not exceed 500 characters.";
    } else {
        addressError.innerHTML = ""
    }
}