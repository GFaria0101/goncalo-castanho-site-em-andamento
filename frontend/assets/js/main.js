// Menu Mobile
const menuToggle = () => {
    const header = document.getElementById('header');
    const menu = document.querySelector('.menu');
    const toggle = document.querySelectorAll('.toggle');
    const links = document.querySelectorAll('.menu ul li a');
    
    // Toggle menu
    toggle.forEach(icon => {
        icon.addEventListener('click', () => {
            menu.classList.toggle('active');
            document.querySelector('.icon-close').classList.toggle('show');
            document.querySelector('.icon-menu').classList.toggle('hide');
        });
    });
    
    // Close menu when clicking links
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.querySelector('.icon-close').classList.remove('show');
            document.querySelector('.icon-menu').classList.remove('hide');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        header.classList.toggle('scroll', window.scrollY > 50);
    });
}

// Smooth scroll for anchor links
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    menuToggle();
    smoothScroll();
    
    // Preload images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.getAttribute('src');
    });
});