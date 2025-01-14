const addfriendbtn = document.querySelector('button');
const recommend = document.querySelector('h5');

addfriendbtn.addEventListener('click', function() {

    if(addfriendbtn.innerHTML == "Add Friend") {
        recommend.innerHTML = "New Friend"
        recommend.style.color = "green"
        addfriendbtn.style.backgroundColor = 'red'
        addfriendbtn.style.color = 'white'
        addfriendbtn.innerHTML = "Remove"
        addfriendbtn.style.borderRadius = "6%";
    }
    else {
        recommend.innerHTML = "Removed"
        addfriendbtn.innerHTML = "Add Friend"
        addfriendbtn.style.backgroundColor = "cadetblue";
        addfriendbtn.style.color = "white";
        addfriendbtn.style.borderRadius = "50px";
    }

})

