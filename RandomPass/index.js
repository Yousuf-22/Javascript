const btn = document.querySelector('#btn');
const inputfield = document.querySelector('#Password');

function generatePassword() {
    const uppercase = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const lowercase = 'qwertyuioplkjhgfdsazxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    const allcharacter = uppercase + lowercase + numbers + symbols;
    let password = "";

    for(let i = 0; i<8; i++) {
        const index = Math.floor(Math.random() * allcharacter.length);
        password += allcharacter[index];
    }

    return password;
}

btn.addEventListener('click', function() {
    const repsonse = generatePassword();
    inputfield.value = repsonse;
})


function copypassword() {
    inputfield.select();
    document.execCommand("copy");
}