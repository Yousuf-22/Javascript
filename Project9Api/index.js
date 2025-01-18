const api = fetch('http://api.weatherapi.com/v1/current.json?key=36c6cf1b45854f53905151323251601&q=London&aqi=yes');

console.log(api);


const textfield = document.getElementById('text');
const btn = document.getElementById('btn');

const cityname = document.querySelector('h4');
const citytime = document.querySelector('p');
const citytemp = document.querySelector('h5');


async function getData(one) {
    // async task
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=36c6cf1b45854f53905151323251601&q=${one}&aqi=yes`);
    return await promise.json()
}

btn.addEventListener('click', async function(ele) {
    // ele.preventDefault();
    const one = textfield.value;
    const result = await getData(one);
    console.log(result);
    
    cityname.innerHTML = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    citytime.innerHTML = `${result.location.localtime}`;
    citytemp.innerHTML = `${result.current.temp_c}`
})

