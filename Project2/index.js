const bulb = document.querySelector('#bulb')

const button = document.querySelector('#button')

button.addEventListener('click',(ele) => {
    console.log(ele.target);
    if(ele.target.innerHTML == 'OFF') {
        bulb.style.backgroundColor = 'white'
        ele.target.innerHTML = 'NO'
    }
    else {
        bulb.style.backgroundColor = 'yellow'
        ele.target.innerHTML = 'OFF'
    }
})
