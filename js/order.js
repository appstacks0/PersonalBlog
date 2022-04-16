function validateForm() {
    let isValidFood = validateFood();
    let isValidName = validateName();
    let isValidNote = validateNote();
    let isValidDate = validateDate();
    let isValidAddress = validateAddress();

    let isValid = isValidFood && isValidName && isValidNote && isValidDate && isValidAddress;
    if (isValid) {
        alert("Thank you for ordering.\nWe received your order and will begin processing it soon.")
    }
    return isValid;
}

function validateFood() {
    let food = document.getElementById('food').value;
    let foodError = document.getElementById('food_error');


    if (food === '') {
        foodError.innerHTML = "Please select our product.";
        return false;
    }
    foodError.innerHTML = "";
    return true;
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

function validateNote() {
    let note = document.getElementById('note').value.trim();
    let noteError = document.getElementById('note_error');

    if (note.length > 30) {
        noteError.innerHTML = "Message should not exceed 30 characters.";
        return false;
    }
    noteError.innerHTML = "";
    return true;
}

function validateDate() {
    let date = document.getElementById('date').value;
    let dateError = document.getElementById('date_error');

    if (date.length == 0) {
        dateError.innerHTML = "Please fill out the deliver date.";
        return false;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0, 0);
    if (new Date(date).getTime() < today.getTime()) {
        dateError.innerHTML = "Delivery date must not be in the past.";
        return false;
    }
    dateError.innerHTML = ""
    return true;
}

function validateAddress() {
    let addressLength = document.getElementById('address').value.trim().length;
    let addressError = document.getElementById('address_error');

    if (addressLength == 0) {
        addressError.innerHTML = "Please fill out the address.";
        return false;
    }
    if (addressLength > 500) {
        addressError.innerHTML = "Address should not exceed 500 characters.";
        return false;
    }
    addressError.innerHTML = ""
    return true;
}