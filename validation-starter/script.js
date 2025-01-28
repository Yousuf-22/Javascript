const nameError = document.querySelector('#nameError');
const PhError = document.querySelector('#phone');
const EmailError = document.querySelector('#email');
const MessageError = document.querySelector('#message');
const SubmitError = document.querySelector('#SubmitError');
const ul = document.querySelector('.container')

function validateName() {
    var name = document.getElementById('name').value; 

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatePH() {
    var phone = document.getElementById('ph').value;
    console.log(phone);

    if(phone.length == 0) {
        PhError.innerHTML = "Phone no. is required";
        return false;
    }

    if(phone.length !== 10) {
        PhError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        PhError.innerHTML = "Only digit please";
        return false;
    }
    PhError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('emailid').value;
    console.log(email);
    
    if(email.length == 0) {
        EmailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        EmailError.innerHTML = "Invalid Email"
        return false;
    }
    EmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var msg = document.getElementById('msg').value;
    let len = msg.length;
    console.log(len);
    
    if(msg.length == 0) {
        MessageError.innerHTML = "Message is required";
        return false;
    }
    if(30 - len > 0) {
        MessageError.innerHTML = `Minnimum ${30 - len} character is required`;
        return false;
    }
    MessageError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateForm() {

    if(!validateName() || !validatePH() || !validateEmail() || !validateMessage()) {
        SubmitError.style.display = 'block';
        SubmitError.innerHTML = "Please fix errors to submit";
        setTimeout(function() {
            SubmitError.style.display = 'none';
        },3000)
        return false;
    }
    SubmitError.innerHTML = "Submitted";
    return true;

}