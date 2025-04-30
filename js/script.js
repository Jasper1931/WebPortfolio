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

// Quiz Gallery functionality
const quizGalleries = {
    midterm: document.getElementById('midterm-gallery'),
    pretest: document.getElementById('pretest-gallery'),
    posttest: document.getElementById('posttest-gallery'),
    laboratory: document.getElementById('laboratory-gallery')
};

if (Object.values(quizGalleries).some(gallery => gallery !== null)) {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalInfo = document.getElementById('modal-info');
    const closeBtn = document.querySelector('.close');
    
    const quizImages = {
        midterm: [
            { src: "images/longquiz.jpg", desc: "Long Quiz" },
            { src: "images/midterm.jpg", desc: "Midterm Exam" },

        ],
        pretest: [
            { src: "images/pre1.jpg", desc: "Pre-test 1" },            
            { src: "images/pre2.png", desc: "Pre-test 2" },
            { src: "images/pre3.png", desc: "Pre-test 3" },
            { src: "images/pre4.png", desc: "Pre-test 4" },
            { src: "images/pre5.png", desc: "Pre-test 5" }
        ],
        posttest: [
            { src: "images/post1.jpg", desc: "Post-test 1" },
            { src: "images/post2.jpg", desc: "Post-test 2" },
            { src: "images/post3.jpg", desc: "Post-test 3" },
            { src: "images/post4.jpg", desc: "Post-test 4" },
            { src: "images/post5.jpg", desc: "Post-test 5" }
        ],
        laboratory: [
            { src: "images/Lab 1.jpeg", desc: "Laboratory 1" },
            { src: "images/Lab 1 - Wireframe.jpeg", desc: "Laboratory 1 - Wireframe" }
        ]
    };
    
    // Create gallery items for each category
    for (const [category, gallery] of Object.entries(quizGalleries)) {
        if (gallery) {
            gallery.innerHTML = '';
            
            quizImages[category].forEach(image => {
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
        }
    }
    
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
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project2.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project3.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project4.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project5.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project6.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            },
            {
                src: "images/project7.png",
                title: "Laboratory 1",
                description: "Making a sample Website using HTML/CSS"
            }

        ],
        "project2": [
            {
                src: "images/lab1.png",
                title: "Laboratory 2",
                description: "Making a Log-In and Registration Form with Database"
            },
            {
                src: "images/lab2.png",
                title: "Laboratory 2",
                description: "Making a Log-In and Registration Form with Database"
            },
            {
                src: "images/lab3.png",
                title: "Laboratory 2",
                description: "Making a Log-In and Registration Form with Database"
            },
            {
                src: "images/lab4.png",
                title: "Laboratory 2",
                description: "Making a Log-In and Registration Form with Database"
            },
            {
                src: "images/lab5.png",
                title: "Laboratory 2",
                description: "Making a Log-In and Registration Form with Database"
            }
            
        ],
        "project3": [
            {
                src: "images/proj1.png",
                title: "Laboratory 3",
                description: "Making a to do list using PHP without Database"
            },
            {
                src: "images/proj2.png",
                title: "Laboratory 3",
                description: "Making a to do list using PHP without Database"
            },
            {
                src: "images/proj3.png",
                title: "Laboratory 3",
                description: "Making a to do list using PHP without Database"
            },
            {
                src: "images/proj4.png",
                title: "Laboratory 3",
                description: "Making a to do list using PHP without Database"
            },
            {
                src: "images/proj5.png",
                title: "Laboratory 3",
                description: "Making a to do list using PHP without Database"
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