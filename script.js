let radio = document.querySelector(".items1");
let orders = 0;
let orderText = document.querySelector('.orders');

document.addEventListener('click', (e)=>{
    if (!e.target.classList.contains('active')){
        let i = e.target.parentNode.children.length
        for (let x=0; x<i; x++){
            e.target.parentNode.children.item(x).classList.toggle('active')
        }
    }
})


let btn = document.querySelector('body');
btn.addEventListener('click',(e)=>{
    if (e.target.classList.contains('star')){
        e.target.classList.toggle('gray');
        e.target.classList.toggle('gold');
    }
    orders = document.querySelectorAll('.gold').length;
    orderText.textContent = orders;
})


