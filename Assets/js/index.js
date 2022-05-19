const aboutScroll =  document.querySelector('.about-link');
const serviceScroll =  document.querySelector('.service-link');

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
}