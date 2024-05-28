const buttons = document.querySelectorAll('.btn')
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            // body.style.backgroundColor = e.target.id;
            window.location.href = "black.html";
        }
        else if(e.target.id === 'pink'){
            // body.style.backgroundColor = e.target.id;
            window.location.href = "red.html";
        }
        else if(e.target.id === 'blue'){
            // body.style.backgroundColor = e.target.id;
            window.location.href = "green.html";
        }
        else if(e.target.id === 'yellow'){
            // body.style.backgroundColor = e.target.id;
            window.location.href = "yellow.html";
        }
    });
});
