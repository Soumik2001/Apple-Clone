

// Type js code

new Typed('.typed',{
    strings : ['Love','Choose','Like'],
    typeSpeed : 100,
    delaySpeed : 190,
    loop : true
  });

  new Typed('.helps',{
    strings : ['Whenever you need it.','Whatever you need it.','However you need it.'],
    typeSpeed : 80,
    delaySpeed : 290,
    loop : true
  });


  

  // Slider 
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');

 next.addEventListener('click', function(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').appendChild(items[0]);
 });
 prev.addEventListener('click', function(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').prepend(items[items.length - 1]);

 });


//  store slider
// Swiper js code
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });



    // video scrolling animation

  


    // mac page coursel 

    
    