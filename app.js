let number = document.getElementById("number");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");



function counterNumber() {
    let num = 0;

    increase.addEventListener("click", (e) => {
        num += 1;
        number.innerText = num;
        if (parseInt(number.innerText)>0) number.style.color = 'green';
        if (parseInt(number.innerText)==0) number.style.color = 'darkblue';
    })
    
    decrease.addEventListener("click", (e) => {
        num -= 1;
        number.innerText = num;
        if (parseInt(number.innerText)<0) number.style.color = 'red';
        if (parseInt(number.innerText)==0) number.style.color = 'darkblue';
    })
    
    reset.addEventListener("click", (e) => {
        window.location.reload();
    })
}

counterNumber();