const button = document.querySelector('a');
button.addEventListener('click',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const conclusion = document.querySelector('#BMI-weight-guide');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML =`Please give a valid height ${height}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML =`Please give a valid weight ${weight}`
    }
    else{
        result.style.paddingTop = '2rem';
        result.style.fontSize = '4rem';
        const bmi = (weight / ((height*height) /10000) ).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
        conclusion.style.lineHeight = '22px';
        if(bmi<18.6){
            conclusion.innerHTML = "Your weight is Lower<br> than Normal";
        }
        else if(bmi =>18.6 && bmi <= 24.9){
            conclusion.innerHTML = "You have normal weight";
        }
        else{
            conclusion.innerHTML = "Your weight is greater<br> than Normal";
        }
    }
});
