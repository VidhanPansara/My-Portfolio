 // Dark mode toggle
 const themeToggle = document.getElementById('themeToggle');
 const body = document.body;
 const icon = themeToggle.querySelector('i');

 // Check for saved user preference
 const currentTheme = localStorage.getItem('theme');
 if (currentTheme === 'dark') {
     body.classList.add('dark-mode');
     icon.classList.replace('fa-moon', 'fa-sun');
 }

 themeToggle.addEventListener('click', () => {
     body.classList.toggle('dark-mode');
     
     if (body.classList.contains('dark-mode')) {
         icon.classList.replace('fa-moon', 'fa-sun');
         localStorage.setItem('theme', 'dark');
     } else {
         icon.classList.replace('fa-sun', 'fa-moon');
         localStorage.setItem('theme', 'light');
     }
 });

 // Back to top button
 const backToTop = document.getElementById('backToTop');
 
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         backToTop.classList.add('active');
     } else {
         backToTop.classList.remove('active');
     }
 });

 backToTop.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Progress bar
 const progressBar = document.getElementById('progressBar');
 
 window.addEventListener('scroll', () => {
     const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
     const scrollProgress = (window.pageYOffset / scrollTotal) * 100;
     progressBar.style.width = scrollProgress + '%';
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Animation on scroll
 const sections = document.querySelectorAll('.section');
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateY(0)';
         }
     });
 }, { threshold: 0.1 });

 sections.forEach(section => {
     observer.observe(section);
 });

 // Navigation toggle for mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});