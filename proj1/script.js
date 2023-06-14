// hide nave bar when scroll up and show when scroll down

document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 


  
// aos init
// AOS.init({
//   duration: 800,
// })
  window.addEventListener('load', () => {
    AOS.init({
      duration: 300,
      delay:200,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

/**
   * Testimonials slider
   */
 new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// -----------------js for toggle form ---------------------

var logf = document.getElementById("logf");
var regf = document.getElementById("regf");
var Indicator = document.getElementById("Indicator");

function register() 
{
  logf.style.transform = "translateX(0px)";
  regf.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}
function login() 
{
  logf.style.transform = "translateX(305px)";
  regf.style.transform = "translateX(305px)";
  Indicator.style.transform = "translateX(0px)";
}