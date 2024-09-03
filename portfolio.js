
const darkModeToggle = document.getElementById('darkModeToggle');
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
         // Function to apply dark mode
    function applyDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }

    // Function to remove dark mode
    function removeDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    // Check localStorage for theme preference and apply it
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('theme') === 'dark') {
            applyDarkMode();
        }
    });

    // Toggle dark mode on button click
    document.getElementById('dark-mode-toggle').addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            removeDarkMode();
        } else {
            applyDarkMode();
        }
    });

        function filterProjects(category) {
            const projects = document.querySelectorAll('.project-card');
            projects.forEach(project => {
                if (category === 'all' || project.getAttribute('data-category') === category) {
                    project.style.display = 'block';
                    project.style.transform = 'scale(1)';
                } else {
                    project.style.display = 'none';
                }
            });
        }
  
        
        function openModal() {
            document.getElementById('servicesModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('servicesModal').style.display = 'none';
        }
    
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        });


        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Form validation (can be expanded)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const responseMessage = document.getElementById('responseMessage');

            if (name && email && message) {
                responseMessage.textContent = 'Thank you for your message!';
                responseMessage.className = 'message success';
                document.getElementById('contactForm').reset();
            } else {
                responseMessage.textContent = 'Please fill out all fields.';
                responseMessage.className = 'message error';
            }
            responseMessage.style.display = 'block';
        });
 // Apply Dark Mode
        function applyDarkMode() {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        
        // Remove Dark Mode
        function removeDarkMode() {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        
        // Check localStorage for theme preference and apply it
        document.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('theme') === 'dark') {
                applyDarkMode();
            }
        });
        
        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                removeDarkMode();
            } else {
                applyDarkMode();
            }
        });
        
        // Hamburger Menu Toggle
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        // Filter Projects
        function filterProjects(category) {
            const projects = document.querySelectorAll('.project-card');
            projects.forEach(project => {
                if (category === 'all' || project.getAttribute('data-category') === category) {
                    project.style.display = 'block';
                    project.style.transform = 'scale(1)';
                } else {
                    project.style.display = 'none';
                }
            });
        }
        
        // Modal Functions
        function openModal() {
            document.getElementById('servicesModal').style.display = 'flex';
        }
        
        function closeModal() {
            document.getElementById('servicesModal').style.display = 'none';
        }
        
        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
        
            const responseMessage = document.getElementById('responseMessage');
        
            if (name && email && message) {
                responseMessage.textContent = 'Thank you for your message!';
                responseMessage.className = 'message success';
                document.getElementById('contactForm').reset();
            } else {
                responseMessage.textContent = 'Please fill out all fields.';
                responseMessage.className = 'message error';
            }
            responseMessage.style.display = 'block';
        });
        







        

        
        //Footer Section
         // Update the year dynamically
         document.getElementById('year').textContent = new Date().getFullYear();

         // Show/Hide Back to Top button
         const backToTopBtn = document.getElementById('backToTopBtn');
 
         window.addEventListener('scroll', () => {
             if (window.scrollY > 300) {
                 backToTopBtn.classList.add('show');
             } else {
                 backToTopBtn.classList.remove('show');
             }
         });
 
         // Scroll to top functionality
         backToTopBtn.addEventListener('click', () => {
             window.scrollTo({ top: 0, behavior: 'smooth' });
         });
 