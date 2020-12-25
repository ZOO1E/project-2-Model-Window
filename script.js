'use strict';

// html에서 불러오는 것이 귀찮기에
const modal = document.querySelector('.modal');//html에서 hidden은 추가적인 것으로 제외해도 ㄱㅊ
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal =  document.querySelectorAll('.show-modal');


//stop ! duplicate function
const closemodal =function(){
    modal.classList.add('hidden');//hidden추가
    overlay.classList.add('hidden');
}
const openmodal = function(){
    modal.classList.remove('hidden');//hidden제거로 창이 나옴
    overlay.classList.remove('hidden');
    }

btnsOpenModal.addEventListener('click',openmodal)
btnCloseModal.addEventListener('click' , closemodal)
overlay.addEventListener('click',closemodal)

document.addEventListener('keydown' ,function (e){
    if (e.key ==='Escape' && !modal.classList.contains('hidden'))
     closemodal();
})




