    function validateForm() {
        var forms = document.getElementById("form");
        let isValid = forms.checkValidity();
        if (isValid) {
            alert(message)
        }
        return isValid;
    }
