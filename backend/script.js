
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.classList.remove('shadow-lg');
    return;
  }

  if (currentScroll > lastScroll) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
  lastScroll = currentScroll;
});

const menu = document.querySelector('.menu');
const hamburgermenu = document.querySelector('.hamburgermenu');

menu.addEventListener ('click', displayMenu);
hamburgermenu,addEventListener ('click', displayMenu);

const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');
function displayMenu()


{
    if(!menu.classList('aboslute')) {
        menu.classList.add('hidden');

        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';

        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-slate-800');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2 ');

    }else{
        menu.classList.remove('hidden');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';

        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2 ');
    }
}

  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const closeIcon = document.querySelector('.fa-xmark');
    const barsIcon = document.querySelector('.fa-bars');

    hamburger.addEventListener('click', function() {
      menu.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      barsIcon.classList.toggle('hidden');
    });
  });

  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });
  
  