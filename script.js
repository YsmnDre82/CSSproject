const color = document.querySelector('.color');
const colorInput = document.querySelector('.color-input');
const colorCode = document.querySelector('.color-code');

colorInput.addEventListener('input' , ()=>{
    color.style.background = colorInput.value;
    colorCode.innerHTML = colorInput.value;
    colorCode.style.color = colorInput.value;
})