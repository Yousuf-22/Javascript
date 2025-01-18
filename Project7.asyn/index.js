    const start = document.getElementById('start');
    const stop = document.getElementById('stop');

    const randomColor = function() {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color;
    };

    let refrence;
    start.addEventListener('click', function() {
        console.log("start");
        
        refrence = setInterval(function() {
            document.querySelector('body').style.backgroundColor = `${randomColor()}`
        },500)
    })
    
    stop.addEventListener('click', function() {
        clearInterval(refrence);
        console.log("stoped");
        
    })