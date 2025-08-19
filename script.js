const selecBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('option');


selecBtn.addEventListener('click', function(){
    selecBtn.classList.toggle('active');
})


for(options of option){
    options.onclick = function(){
        text.innerHTML = this.textContent;
        selecBtn.classList.remove('active');
    }
}