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

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal({
      //reset: true,
      distance: '80px',
      duration: 2000, 
      delay: 200
  });

  // Configurazioni di animazione per le sezioni
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .demos-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  // Configurazione di animazione per i post del blog
  ScrollReveal().reveal('.blog-post-item', { origin: 'left', distance: '50px', duration: 1000 });
});



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
// Call the setPortfolioBoxHeight function when the page first loads
window.addEventListener('load', setPortfolioBoxHeight);

window.onload = function() {
    document.getElementById("contact-form").reset();
    setTimeout(function() {
      setPortfolioBoxHeight();
    }, 500); // set the delay to 500ms (adjust as necessary)
  };
  
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
  document.addEventListener("DOMContentLoaded", function () {
    // URL del feed RSS
    var rssFeedUrl = 'https://andreabonagames.wordpress.com/feed';


    // Funzione per ottenere e visualizzare i post del blog
// Funzione per ottenere e visualizzare i post del blog
function fetchBlogPosts() {
  fetch(rssFeedUrl)
    .then((response) => response.text())
    .then((xmlData) => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlData, "text/xml");

      // Trova tutti gli elementi 'item' nel feed RSS
      var items = xmlDoc.querySelectorAll("item");

      // Ottieni il contenuto del post e visualizzalo
      items.forEach(function (item) {
        var title = item.querySelector("title").textContent;
        var link = item.querySelector("link").textContent;
        var rawPubDate = item.querySelector("pubDate").textContent;
            var description = item.querySelector("description").textContent;

                // Converti la data grezza in un oggetto Data di JavaScript
    var pubDateObj = new Date(rawPubDate);

    // Formatta la data nel formato desiderato (dd mmm yyyy)
    var formattedPubDate = pubDateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

        // Creare un elemento div per ogni post e aggiungerlo alla pagina con una classe
// Creare un elemento div per ogni post e aggiungerlo alla pagina con una classe
var postDiv = document.createElement("div");
      postDiv.classList.add("blog-post", "blog-post-item"); // Aggiungi la classe "blog-post" e "blog-post-item"
      postDiv.innerHTML = `
        <h2>${title}</h2>
        <p>${formattedPubDate}</p>
        <p>${description}</p>
        <a href="${link}" target="_blank">Leggi di più</a>
      `;
      document.getElementById("blog-posts").appendChild(postDiv);
      });
    })
    .catch((error) => console.error("Errore nel recupero del feed RSS:", error));
}

// Chiamare la funzione per recuperare e visualizzare i post del blog
fetchBlogPosts();
  });






