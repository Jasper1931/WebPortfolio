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

     // Projects data
     const projectsData = {
        "project1": [
            {
                src: "images/project1.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project2.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project3.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project4.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project5.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project6.png",
                title: "Project 1",
                description: "Description of Project 1"
            },
            {
                src: "images/project7.png",
                title: "Project 1",
                description: "Description of Project 1"
            }

        ],
        "project2": [
            {
                src: "images/lab1.png",
                title: "Project 2",
                description: "Description of Project 2"
            },
            {
                src: "images/lab2.png",
                title: "Project 2",
                description: "Description of Project 2"
            },
            {
                src: "images/lab3.png",
                title: "Project 2",
                description: "Description of Project 2"
            },
            {
                src: "images/lab4.png",
                title: "Project 2",
                description: "Description of Project 2"
            },
            {
                src: "images/lab5.png",
                title: "Project 2",
                description: "Description of Project 2"
            }
            
        ]
    };

    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <span class="project-modal-close">&times;</span>
        <img class="project-modal-content" id="modal-current-image" alt="">
        <div class="project-modal-info" id="modal-image-info"></div>
                <div class="project-modal-nav">
        <button id="modal-prev-btn" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
        <button id="modal-next-btn" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    document.body.appendChild(modal);

    // Gallery controls
    const galleries = {};

    // Initialize galleries
    document.querySelectorAll('.projects-gallery').forEach((gallery, index) => {
        const projectId = `project${index + 1}`;
        const projects = projectsData[projectId];
        
        // Store gallery state
        galleries[projectId] = {
            currentIndex: 0,
            element: gallery,
            projects: projects
        };

        // Create gallery HTML
        gallery.innerHTML = `
            <div class="gallery-slide">
                <div class="gallery-image-container">
                    <img src="${projects[0].src}" alt="${projects[0].title}" class="current-image">
                </div>
            </div>
            <div class="gallery-caption">
                <h3 class="image-title">${projects[0].title}</h3>
                <p class="image-description">${projects[0].description}</p>
            </div>
            <div class="gallery-nav">
                <button class="prev-btn" aria-label="Previous image" ${projects.length <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-btn" aria-label="Next image" ${projects.length <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;

        // Add click event to image
        gallery.querySelector('.gallery-image-container').addEventListener('click', () => {
            showModal(projectId, galleries[projectId].currentIndex);
        });

        // Add event listeners to gallery navigation buttons
        gallery.querySelector('.next-btn').addEventListener('click', () => {
            nextProject(projectId);
        });

        gallery.querySelector('.prev-btn').addEventListener('click', () => {
            prevProject(projectId);
        });
    });

    // Gallery navigation functions
    function nextProject(projectId) {
        const gallery = galleries[projectId];
        if (gallery.currentIndex < gallery.projects.length - 1) {
            gallery.currentIndex++;
            updateGallery(projectId);
        }
    }

    function prevProject(projectId) {
        const gallery = galleries[projectId];
        if (gallery.currentIndex > 0) {
            gallery.currentIndex--;
            updateGallery(projectId);
        }
    }

    function updateGallery(projectId) {
        const gallery = galleries[projectId];
        const project = gallery.projects[gallery.currentIndex];
        const galleryElement = gallery.element;
        
        galleryElement.querySelector('.current-image').src = project.src;
        galleryElement.querySelector('.current-image').alt = project.title;
        galleryElement.querySelector('.image-title').textContent = project.title;
        galleryElement.querySelector('.image-description').textContent = project.description;
        
        // Update button states
        galleryElement.querySelector('.prev-btn').disabled = gallery.currentIndex === 0;
        galleryElement.querySelector('.next-btn').disabled = gallery.currentIndex === gallery.projects.length - 1;
    }

    // Modal control functions
    function showModal(galleryId, index) {
        const project = projectsData[galleryId][index];
        
        document.getElementById('modal-current-image').src = project.src;
        document.getElementById('modal-current-image').alt = project.title;
        document.getElementById('modal-image-info').textContent = `${project.title} - ${project.description}`;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        
        // Update current context
        modal.dataset.currentGallery = galleryId;
        modal.dataset.currentIndex = index;
        
        // Update modal button states
        updateModalButtons();
    }

    function updateModalButtons() {
        const galleryId = modal.dataset.currentGallery;
        const currentIndex = parseInt(modal.dataset.currentIndex);
        const projects = projectsData[galleryId];
        
        document.getElementById('modal-prev-btn').disabled = currentIndex === 0;
        document.getElementById('modal-next-btn').disabled = currentIndex === projects.length - 1;
    }

    function modalNextProject() {
        const galleryId = modal.dataset.currentGallery;
        let currentIndex = parseInt(modal.dataset.currentIndex);
        const projects = projectsData[galleryId];
        
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            modal.dataset.currentIndex = currentIndex;
            showModal(galleryId, currentIndex);
        }
    }

    function modalPrevProject() {
        const galleryId = modal.dataset.currentGallery;
        let currentIndex = parseInt(modal.dataset.currentIndex);
        const projects = projectsData[galleryId];
        
        if (currentIndex > 0) {
            currentIndex--;
            modal.dataset.currentIndex = currentIndex;
            showModal(galleryId, currentIndex);
        }
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Modal event listeners
    document.getElementById('modal-prev-btn').addEventListener('click', modalPrevProject);
    document.getElementById('modal-next-btn').addEventListener('click', modalNextProject);
    document.querySelector('.project-modal-close').addEventListener('click', closeModal);

    // Click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === "block") {
            if (e.key === "ArrowRight") {
                modalNextProject();
            } else if (e.key === "ArrowLeft") {
                modalPrevProject();
            } else if (e.key === "Escape") {
                closeModal();
            }
        }
    });
});