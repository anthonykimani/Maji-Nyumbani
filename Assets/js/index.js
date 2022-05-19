const aboutScroll =  document.querySelector('.about-link');
const serviceScroll =  document.querySelector('.service-link');
const serviceDrop = document.querySelector('.text-icon');
const serviceCard = document.querySelector('.services-bar > div');

window.onload = function(){
   aboutScroll.addEventListener('click',function(){
        setTimeout(function () {
            window.scrollTo(0, 600);
        },2);
    })

    serviceScroll.addEventListener('click',function(){
        setTimeout(function () {
            window.scrollTo(0, 1630);
        },2);
    })

    serviceDrop.addEventListener('click',function(){
        serviceCard.classList.toggle('.show');
    });
}