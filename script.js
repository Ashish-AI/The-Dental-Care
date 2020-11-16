const trigger1=document.querySelector('#trigger1');
const trigger2=document.querySelector('#trigger2');
const trigger3=document.querySelector('#trigger3');
const trigger4=document.querySelector('#trigger4');
const trigger5=document.querySelector('#trigger5');
const trigger6=document.querySelector('#trigger6');

const modalWrapper1=document.querySelector('.modal-wrapper1');
const modalWrapper2=document.querySelector('.modal-wrapper2');
const modalWrapper3=document.querySelector('.modal-wrapper3');
const modalWrapper4=document.querySelector('.modal-wrapper4');
const modalWrapper5=document.querySelector('.modal-wrapper5');
const modalWrapper6=document.querySelector('.modal-wrapper6');


const closebtn1=document.querySelector('.close-btn1');
const closebtn2=document.querySelector('.close-btn2');
const closebtn3=document.querySelector('.close-btn3');
const closebtn4=document.querySelector('.close-btn4');
const closebtn5=document.querySelector('.close-btn5');
const closebtn6=document.querySelector('.close-btn6');

const close1=document.querySelector('.close1');
const close2=document.querySelector('.close2');
const close3=document.querySelector('.close3');
const close4=document.querySelector('.close4');
const close5=document.querySelector('.close5');
const close6=document.querySelector('.close6');



trigger1.addEventListener('click',function(){
	modalWrapper1.classList.add('active');
});

trigger2.addEventListener('click',function(){
	modalWrapper2.classList.add('active');
});
trigger3.addEventListener('click',function(){
	modalWrapper3.classList.add('active');
});
trigger4.addEventListener('click',function(){
	modalWrapper4.classList.add('active');
});
trigger5.addEventListener('click',function(){
	modalWrapper5.classList.add('active');
});
trigger6.addEventListener('click',function(){
	modalWrapper6.classList.add('active');
});



closebtn1.addEventListener('click',function(){
	modalWrapper1.classList.remove('active');
});
closebtn2.addEventListener('click',function(){
	modalWrapper2.classList.remove('active');
});
closebtn3.addEventListener('click',function(){
	modalWrapper3.classList.remove('active');
});
closebtn4.addEventListener('click',function(){
	modalWrapper4.classList.remove('active');
});
closebtn5.addEventListener('click',function(){
	modalWrapper5.classList.remove('active');
});
closebtn6.addEventListener('click',function(){
	modalWrapper6.classList.remove('active');
});



close1.addEventListener('click',function(){
	modalWrapper1.classList.remove('active');
});
close2.addEventListener('click',function(){
	modalWrapper2.classList.remove('active');
});
close3.addEventListener('click',function(){
	modalWrapper3.classList.remove('active');
});
close4.addEventListener('click',function(){
	modalWrapper4.classList.remove('active');
});
close5.addEventListener('click',function(){
	modalWrapper5.classList.remove('active');
});
close6.addEventListener('click',function(){
	modalWrapper6.classList.remove('active');
});