document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchIcon.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando por: "${query}"`);
            // Aqui você implementaria a lógica de busca real
        }
    }
});

// Newsletter subscription
document.querySelector('.newsletter-button').addEventListener('click', function() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        alert('Inscrição realizada com sucesso!');
        emailInput.value = '';
    } else {
        alert('Por favor, insira um email válido.');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Social sharing
document.querySelectorAll('.share-icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        const platform = this.className.includes('facebook') ? 'Facebook' : 
                        this.className.includes('twitter') ? 'Twitter' : 'WhatsApp';
        
        alert(`Compartilhando no ${platform}`);
        // Aqui você implementaria a lógica real de compartilhamento
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add reading progress indicator
function addReadingProgress() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #fbbf24;
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });
}

addReadingProgress();

// Add click tracking for news items
document.querySelectorAll('.news-title, .trending-text').forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('News item clicked:', this.textContent);
        // Aqui você implementaria analytics ou navegação
    });
});

// Mobile menu toggle (if needed)
function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header-content');
    
    if (window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            display: none;
        `;
        
        header.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        });
    }
}

window.addEventListener('resize', createMobileMenu);
createMobileMenu();