const clickBtn = document.querySelector('.openpopup');
const okBtn = document.querySelector('.closepopup');
const visible = document.querySelector('.popup');

clickBtn.addEventListener('click',() =>{
    visible.classList.add('open-popup');
})

okBtn.addEventListener('click',() =>{
    visible.classList.remove('open-popup');
})