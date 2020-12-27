'use strict';
 const modal = document.querySelector('.modal');
 const showModal =  document.querySelectorAll('.show-modal');
 const overlayEl =  document.querySelector('.overlay');
 console.log(showModal);
const closeModel =  document.querySelector('.close-modal')
let i =0;
const CloseModal = function(){ 
    modal.classList.add('hidden');
overlayEl.classList.add('hidden');
}
const Openmodal = function(){
    modal.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
}
for(i=0; i<3 ; i++){ 
showModal[i].addEventListener('click' , function(){
    Openmodal();
 })};

closeModel.addEventListener('click' , function(){
    CloseModal();
  });

  overlayEl.addEventListener('click' , function(){
  CloseModal();
  })

  document.addEventListener('keydown' , function(e){
if(e.key === 'Escape' && !modal.classList.contains('hidden') ){
    CloseModal();
}
  });