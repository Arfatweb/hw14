
let cursor = document.querySelector(`.cursor`)


function customMouseCursor (event) {



    let leftValue = event.pageX
    let topValue = event.pageY

    cursor.style.top =`${topValue}px`;
    cursor.style.left =`${leftValue}px`;
    
}

window.addEventListener("mousemove", customMouseCursor);


// *DARKMODE BTN
let darkModeBtn = document.querySelector(`.darkModeBtn`);
let body = document.querySelector(`body`)

const darkMode = () => {
   
    body.classList.toggle("darkMode")
    

}

darkModeBtn.addEventListener(`click`, darkMode);