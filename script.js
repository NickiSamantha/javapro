// NavBar

/* Reset some default styles */
body, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Arial, sans-serif;
  }
  
  /* Navbar container */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
  }
  
  /* Logo */
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Nav links */
  .nav-links {
    display: flex;
    gap: 15px;
    max-height: none; /* No animation or collapse */
    overflow: visible;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 8px 12px;
  }
  
  .nav-links a:hover {
    background: #555;
    border-radius: 4px;
  }
  
  /* Dropdown */
  .dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #444;
  }
  
  .dropdown:hover .dropdown-menu {
    display: block; /* No animation, appears instantly */
  }
  
  .dropdown-menu li {
    padding: 5px 15px;
  }
  
  .dropdown-menu li a {
    color: white;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-menu li a:hover {
    background-color: #555;
  }
  
  /* Hamburger menu */
  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  #menu-toggle {
    display: none;
  }
  
  #menu-toggle:checked + .nav-links {
    display: flex; /* Display instantly without animation */
    flex-direction: column;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      width: 100%;
      background: #333;
    }
  
    .hamburger {
      display: block;
    }
  }
  


// Carousal 

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
