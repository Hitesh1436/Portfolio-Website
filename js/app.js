$(document).ready(function(){      //j query use krrhe hn jse hi document ready hoga function trigger hojygaa
    $('.slider').slick({          // yh ab mn wrapper ko select krenge slider ka
   arrows:false,
   dots:true,       // yeh use kiya tki hum apne custom arrow lgaa ske
   appendDots:'.slider-dots',      // iska use h khn pr dots dikhne chaiye
   dotsClass:'dots',       // custom class derhe hain
});

let hamberger = document.querySelector('.hamberger');  // hamberger and times ke liye jse hi click kren to open ho and cross kren toh close hojye
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');  // tki open hoske mobile view main
  hamberger.addEventListener('click',function(){       // event listener add krrhe hn tki click hotey hi vo run kree
   mobileNav.classList.add('open');   // mobilenav ki classlist mn open add kregaa
  });

  times.addEventListener('click',function(){
    mobileNav.classList.remove('open');  // yeh jb cross pr click krenge tb close krega nav bar ko
});                               


});