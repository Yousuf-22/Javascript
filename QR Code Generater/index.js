const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example`;
const Qrcontainer = document.querySelector('.qrcode');
const qrimg = document.querySelector('#qrimg');
const inputfield = document.querySelector('#inputfield');
const btn = document.querySelector('#btn');

function generateQRcode() {
    if(inputfield.value === "") {
        alert("Please Enter Url or text");
    }
    else {
        const data = inputfield.value;
        const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        console.log(api);
        qrimg.src = api;

        inputfield.value = "";
    }
}

btn.addEventListener('click', function() {
    generateQRcode();
})


