document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js for animated text
  if (document.querySelector(".input")) {
    var typed = new Typed(".input", {
      strings: ["College Student", "Web Developer"],
      typedSpeed: 70,
      backSpeed: 55,
      loop: true
    });
  }
  // Mobile navigation toggle
  const toggleBtn = document.querySelector(".togglebtn");
  const navLinks = document.querySelector(".navlinks");
  
  if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", function() {
          this.classList.toggle("active");
          navLinks.classList.toggle("open");
          document.body.classList.toggle("no-scroll");
      });
      
      // Close mobile menu when clicking on links
      navLinks.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
              toggleBtn.classList.remove("active");
              navLinks.classList.remove("open");
              document.body.classList.remove("no-scroll");
          });
      });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const submitBtn = this.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          
          // Simulate form submission
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
          
          setTimeout(() => {
              submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
              
              // Reset form after 3 seconds
              setTimeout(() => {
                  submitBtn.innerHTML = originalText;
                  this.reset();
              }, 3000);
          }, 1500);
      });
  }

  // Gallery functionality
  const gallery = document.querySelector('.gallery');
  if (gallery) {
      const modal = document.getElementById('gallery-modal');
      const modalImg = document.getElementById('modal-img');
      const modalInfo = document.getElementById('modal-info');
      const closeBtn = document.querySelector('.close');
      
      const images = [
          { src: "images/quiz1.jpg", desc: "QUIZ 1" },
          { src: "images/quiz2.jpg", desc: "QUIZ 2" },
          { src: "images/quiz3.jpg", desc: "QUIZ 3" },
          { src: "images/quiz4.jpg", desc: "QUIZ 4" },
          { src: "images/quiz5.jpg", desc: "QUIZ 5" },
          { src: "images/quiz6.jpg", desc: "QUIZ 6" },
          { src: "images/quiz7.jpg", desc: "QUIZ 7" },
          { src: "images/quiz8.jpg", desc: "QUIZ 8" }
      ];
      
      // Clear existing gallery items
      gallery.innerHTML = '';
      
      // Create gallery items
      images.forEach(image => {
          const galleryItem = document.createElement('div');
          galleryItem.className = 'gallery-item';
          
          const img = document.createElement('img');
          img.src = image.src;
          img.alt = image.desc;
          img.loading = "lazy";
          
          const caption = document.createElement('p');
          caption.textContent = image.desc;
          
          galleryItem.appendChild(img);
          galleryItem.appendChild(caption);
          gallery.appendChild(galleryItem);
          
          // Add click event to show modal
          galleryItem.addEventListener('click', () => {
              modal.style.display = "block";
              modalImg.src = image.src;
              modalInfo.textContent = image.desc;
              document.body.style.overflow = "hidden";
          });
      });
      
      // Close modal when X is clicked
      if (closeBtn) {
          closeBtn.addEventListener('click', () => {
              modal.style.display = "none";
              document.body.style.overflow = "auto";
          });
      }
      
      // Close modal when clicking outside
      window.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.style.display = "none";
              document.body.style.overflow = "auto";
          }
      });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              const toggleBtn = document.querySelector('.togglebtn');
              const navLinks = document.querySelector('.navlinks');
              
              if (toggleBtn && navLinks && navLinks.classList.contains('open')) {
                  toggleBtn.classList.remove('active');
                  navLinks.classList.remove('open');
                  document.body.classList.remove('no-scroll');
              }
          }
      });
  });
  // Add animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
  
  // Trigger animation when scrolled into view
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  });
  
  observer.observe(card);
});
  
  // Animation on scroll
  function animateOnScroll() {
      const elements = document.querySelectorAll('.skill-item, .project-card');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.classList.add('animated');
          }
      });
  }
  
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize animations
  document.querySelectorAll('.skill-item, .project-card').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});