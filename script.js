

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

// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// Initialization for ES Users
