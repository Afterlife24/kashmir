window.addEventListener('scroll', () => {
  const aboutContent = document.querySelector('.about-content');
  const aboutImage = document.querySelector('.about-image');
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  // About Section Fade-in
  const aboutSectionPosition = aboutContent.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (aboutSectionPosition < screenPosition) {
      aboutContent.classList.add('visible');
      aboutImage.classList.add('visible');
  }

  // Scroll-to-top button visibility
  if (window.scrollY > 100) {
      scrollToTopButton.classList.add('show');
  } 
});

window.addEventListener('scroll', () => {
  const whyUsContent = document.querySelector('.why-us-content');

  // Why Us Section Fade-in
  const whyUsSectionPosition = whyUsContent.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.7;

  if (whyUsSectionPosition < screenPosition) {
      whyUsContent.classList.add('visible');
  }
});

const eventsWrapper = document.querySelector('.events-wrapper');
const eventItems = document.querySelectorAll('.event-item');
const totalItems = eventItems.length;
let currentIndex = 0;

// Adjust wrapper width dynamically
eventsWrapper.style.width = `${totalItems * 100}vw`;

// Auto-scroll function
function showNextEvent() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    eventsWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
    updateDots();
}

// Handle dot click
function goToEvent(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto-scroll every 10 seconds
setInterval(showNextEvent, 10000);

// Create dots for navigation
const dotsContainer = document.querySelector('.carousel-dots');
eventItems.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => goToEvent(index));
    dotsContainer.appendChild(dot);
});

// Initialize dots and carousel
updateDots();

// Update dots active state
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Scroll-to-top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Language data object
const languageData = {
  en: {
      "contact-info-top": "Call us: (123) 456-7890",
      "logo": "RESTAURANTLY",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-menu": "Menu",
      "nav-events": "Events",
      "nav-gallery": "Gallery",
      "nav-contact": "Contact",
      "book-table": "BOOK A TABLE",
      "hero-title": "Welcome to Restaurantly",
      "hero-description": "Delivering great food for more than 18 years!",
      "learn-more-btn": "Learn More",
      "order-now-btn": "Order Now",
      "about-title": "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
      "about-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "contact-heading-small": "CONTACT",
      "contact-heading": "Contact Us",
      "location-label": "Location:",
      "location": "A108 Adam Street, New York, NY 535022",
      "open-hours-label": "Open Hours:",
      "open-hours": "Monday-Saturday: 11:00 AM - 23:00 PM",
      "email-label": "Email:",
      "email": "info@example.com",
      "phone-label": "Call:",
      "phone": "+1 5589 55488 55"
  },
  fr: {
      "contact-info-top": "Appelez-nous: (123) 456-7890",
      "logo": "RESTAURANTLY",
      "nav-home": "Accueil",
      "nav-about": "À propos",
      "nav-menu": "Menu",
      "nav-events": "Événements",
      "nav-gallery": "Galerie",
      "nav-contact": "Contact",
      "book-table": "RÉSERVER UNE TABLE",
      "hero-title": "Bienvenue chez Restaurantly",
      "hero-description": "Servir de la bonne nourriture depuis plus de 18 ans!",
      "learn-more-btn": "En savoir plus",
      "order-now-btn": "Commander maintenant",
      "about-title": "Fournissant presque un corps de voluptés assomé.",
      "about-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "contact-heading-small": "CONTACT",
      "contact-heading": "Nous contacter",
      "location-label": "Emplacement:",
      "location": "A108 Rue Adam, New York, NY 535022",
      "open-hours-label": "Heures d'ouverture:",
      "open-hours": "Lundi-Samedi: 11h00 - 23h00",
      "email-label": "Email:",
      "email": "info@exemple.com",
      "phone-label": "Appel:",
      "phone": "+1 5589 55488 55"
  }
};

// Function to switch language
function switchLanguage(language) {
  const elements = document.querySelectorAll("[id]");

  elements.forEach(element => {
      const id = element.id;
      if (languageData[language][id]) {
          element.textContent = languageData[language][id];
      }
  });
}

// JavaScript to control overlay toggle behavior
document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-type');
    let activeOverlay = null;

    foodItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgContent = item.querySelector('.img-content');

            // Check if the clicked item is already active
            if (activeOverlay === item) {
                // Remove the overlay if the same item is clicked again
                imgContent.classList.remove('show');
                activeOverlay = null;
            } else {
                // Hide the previous active overlay if any
                if (activeOverlay) {
                    activeOverlay.querySelector('.img-content').classList.remove('show');
                }
                // Show the overlay for the clicked item
                imgContent.classList.add('show');
                activeOverlay = item;
            }
        });
    });
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
