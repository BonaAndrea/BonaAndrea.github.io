// toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    isMenuOpen = !isMenuOpen;
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }
    });
    
    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar links (scroll)
    if (isMenuOpen) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    }
};

// carousel
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.btn-crsl');

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 120}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.dataset.button == 'next' ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();

// swiper for mobile
let touchstartX = 0;
let touchendX = 0;

slidesContainer.addEventListener('touchstart', (event) => {
  touchstartX = event.changedTouches[0].screenX;
});

slidesContainer.addEventListener('touchend', (event) => {
  touchendX = event.changedTouches[0].screenX;
  handleSwipe();
});

const handleSwipe = () => {
  if (touchendX < touchstartX) {
    currSlide++;
  } else if (touchendX > touchstartX) {
    currSlide--;
  }

  if (currSlide > maxSlide) {
    currSlide = 0;
  } else if (currSlide < 0) {
    currSlide = maxSlide;
  }

  updateCarousel(currSlide);
};
