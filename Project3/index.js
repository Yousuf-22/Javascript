const form = document.querySelector('form')

form.addEventListener('submit', function(ele) {
    ele.preventDefault();

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter a valid height'
    }
    else if(weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter a valid weight'
    }
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        if(bmi < 18.6) {
            result.innerHTML = `<span>Your BMI is ${bmi}</span> And You are in Underweight Range`
        }
        else if (bmi > 18.6 && bmi < 24.4) {
            result.innerHTML = `<span>Your BMI is ${bmi}</span> And You are in Normal Range`
        }
        else {
            result.innerHTML = `<span>Your BMI is ${bmi}</span> And You are in Overweight Range`
        }
    }

   

})  








