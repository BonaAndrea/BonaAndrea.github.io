let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false; // add a flag to track the menu state

// Get the section ID from the URL
const sectionId = window.location.hash.substr(1);

// If the section ID exists, set the active class on the corresponding navbar element
if (sectionId) {
  const navbarElement = document.querySelector(`a[href="#${sectionId}"]`);
  navbarElement.classList.add("active");
}
else{
    const navbarElement = document.querySelector(`a[href="#home"]`);
    navbarElement.classList.add("active");
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    isMenuOpen = !isMenuOpen; // toggle the flag
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
    if (isMenuOpen) { // check if menu is open before closing it
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false; // update the flag
    }
};



// scroll reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['game developer', 'game designer', 'gameplay programmer', 'Unity developer', 'Unreal Engine developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function validateForm() {
    // Get form input values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Validate input values
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (subject === "") {
        alert("Please enter a subject for your message.");
        return false;
    }

    if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    // Sanitize input values
    const sanitizedData = {
        name: sanitize(name),
        email: sanitize(email),
        subject: sanitize(subject),
        message: sanitize(message)
    };

    return sanitizedData;
}


function sanitize(input) {
    // Remove any HTML tags and trim input
    const sanitizedInput = input.trim().replace(/(<([^>]+)>)/gi, "");
    return sanitizedInput;
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const sanitizedData = validateForm();

    (function(){
        emailjs.init('2guQR7Sdp6i40zbDR');
    })();

    if (sanitizedData) {
        // Send form data via email using EmailJS
        emailjs.send('gmail_service_prova1',
        'template_sr67wnt', sanitizedData)
            .then(function(response) {
                alert("Your message has been sent!");
            }, function(error) {
                alert("There was an error sending your message. Please try again later.");
            });
            emailjs.send('gmail_service_prova1',
        'template_zifh8nb', sanitizedData);


    }
});

window.onload = function() {
    document.getElementById("contact-form").reset();
  }

  window.addEventListener('load', setPortfolioBoxHeight);

  // Check if the screen is at least 768 pixels wide
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (mediaQuery.matches) {
    // Get an array of all the service boxes
    const serviceBoxes = document.querySelectorAll('.services-container .services-box');

    // Get the number of boxes per row
    const containerWidth = document.querySelector('.services-container').offsetWidth;
    const boxWidth = serviceBoxes[0].offsetWidth;
    const boxesPerRow = Math.floor(containerWidth / boxWidth);

    // Get the height of the tallest service box in each row
    let tallestBoxes = [];
    for (let i = 0; i < serviceBoxes.length; i += boxesPerRow) {
      let maxHeight = 0;
      for (let j = i; j < i + boxesPerRow; j++) {
        if (j < serviceBoxes.length) {
          const boxHeight = serviceBoxes[j].getBoundingClientRect().height;
          if (boxHeight > maxHeight) {
            maxHeight = boxHeight;
          }
        }
      }
      tallestBoxes.push(maxHeight);
    }

    // Set the height of the service boxes in each row to the height of the tallest box in that row
    for (let i = 0; i < serviceBoxes.length; i++) {
      const row = Math.floor(i / boxesPerRow);
      serviceBoxes[i].style.height = `${tallestBoxes[row]}px`;
    }
  }

  function setPortfolioBoxHeight() {
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    let smallestHeight = Infinity;
    for (let i = 0; i < portfolioBoxes.length; i++) {
      const height = portfolioBoxes[i].getBoundingClientRect().height;
      if (height < smallestHeight) {
        smallestHeight = height;
      }
    }
    for (let i = 0; i < portfolioBoxes.length; i++) {
      portfolioBoxes[i].style.height = `${smallestHeight}px`;
    }
  }
  


