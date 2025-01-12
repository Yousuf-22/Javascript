const allbox = document.querySelectorAll('.box')
const body = document.querySelector('body')
console.log(body);

const Arrallbox = Array.from(allbox)
console.log(Arrallbox);

Arrallbox.forEach( box => {
    box.addEventListener( 'click' ,(ele) => {
        if(ele.target.id === 'one') {
            body.style.backgroundColor = 'blueviolet'
        }
        else if(ele.target.id === 'two') {
            body.style.backgroundColor = 'yellow'
        }
        else if(ele.target.id === 'three') {
            body.style.backgroundColor = 'green'
        }
        else if(ele.target.id === 'four') {
            body.style.backgroundColor = 'red'
        }
    })  
}) 
 
