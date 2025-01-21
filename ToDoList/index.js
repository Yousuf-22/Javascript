const inputfield = document.querySelector('#inputfield');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.container');

btn.addEventListener('click',function() {
    let input = document.querySelector('#inputfield').value;

    if(input === '') {
        alert("First add some task ");
    }
    else {
        const newli = document.createElement('li');
        newli.appendChild(document.createTextNode(input));
        ul.appendChild(newli);
        console.log(ul);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newli.appendChild(span);

    }
    savedata();
    inputfield.value = "";
})

ul.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    savedata()
},false);

function savedata() {
    localStorage.setItem("data", ul.innerHTML);
}

function showdata() {
    ul.innerHTML = localStorage.getItem("data");
}

showdata();