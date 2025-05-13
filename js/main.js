// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add light hover effects to make the site feel responsive
    addHoverEffects();
    
    // Add staggered animation to social icons
    animateSocialIcons();
    
    // Initialize skill tags interaction
    initSkillTags();
    
    // Setup contact form
    setupContactForm();
    
    // Initialize learning progress bars
    initLearningProgress();
    
    // Load blog post links
    loadBlogLinks();
    
    // Initialize tools radar
    initToolsRadar();
});

/**
 * Load blog post links from the index.json file
 */
async function loadBlogLinks() {
    const blogContainer = document.getElementById('blog-container');
    if (!blogContainer) return;
    
    try {
        // Fetch the list of blog posts from index.json
        const response = await fetch('/blog/index.json');
        const blogPosts = await response.json();
        
        // Clear loading message
        blogContainer.innerHTML = '';
        
        // Sort posts by date (newest first)
        blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Display the posts
        for (const post of blogPosts) {
            const blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';
            
            // Format date
            const date = new Date(post.date);
            const formattedDate = date.toISOString().split('T')[0];
            
            blogEntry.innerHTML = `
                <div class="blog-date">${formattedDate}</div>
                <h3 class="blog-title">
                    <a href="/blog/reader.html?post=${post.filename}" class="blog-link">${post.title}</a>
                </h3>
                <p class="blog-content">${post.description}</p>
            `;
            
            blogContainer.appendChild(blogEntry);
        }
        
        // Initialize blog entries animations
        initBlogEntries();
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogContainer.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';
    }
}

/**
 * Add subtle hover interactions to elements
 */
function addHoverEffects() {
    // Make section titles reactive
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.opacity = '0.7';
        });
        title.addEventListener('mouseout', () => {
            title.style.opacity = '1';
        });
    });

    // Enable click-through for project cards (optional feature)
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only trigger if the click wasn't on the link itself
            if (!e.target.closest('a')) {
                const link = this.querySelector('a');
                if (link) {
                    window.open(link.href, '_blank');
                }
            }
        });
    });
    
    // Add subtle pulse effect to social icons on hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1.1)';
            }
        });
        
        icon.addEventListener('mouseout', function() {
            const svg = this.querySelector('svg');
            if (svg) {
                svg.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add subtle hover effect to thought cards
    const thoughtCards = document.querySelectorAll('.thought-card');
    thoughtCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = 'none';
        });
    });
    
    // Add subtle hover effect to learning items
    const learningItems = document.querySelectorAll('.learning-item');
    learningItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const progress = item.querySelector('.progress');
            if (progress) {
                progress.style.opacity = '0.9';
                progress.style.filter = 'brightness(1.2)';
            }
        });
        
        item.addEventListener('mouseout', () => {
            const progress = item.querySelector('.progress');
            if (progress) {
                progress.style.opacity = '1';
                progress.style.filter = 'brightness(1)';
            }
        });
    });
}

/**
 * Add staggered animation to social icons
 */
function animateSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach((icon, index) => {
        // Set initial opacity
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(10px)';
        
        // Staggered animation
        setTimeout(() => {
            icon.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 100 + (index * 100)); // Stagger by 100ms
    });
}

/**
 * Initialize skill tags interaction
 */
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        // Random subtle rotation for visual interest
        const rotation = Math.random() * 2 - 1; // -1 to 1 degrees
        tag.style.transform = `rotate(${rotation}deg)`;
        
        // Hover interaction
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.transform = `rotate(${rotation}deg)`;
        });
    });
}

/**
 * Initialize learning progress animations
 */
function initLearningProgress() {
    const progressBars = document.querySelectorAll('.progress');
    
    // Initially set all progress to 0%
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        // Animate to target width after a short delay
        setTimeout(() => {
            bar.style.transition = 'width 1.2s ease-in-out';
            bar.style.width = targetWidth;
        }, 300);
    });
    
    // Add click interaction for learning items
    const learningItems = document.querySelectorAll('.learning-item');
    learningItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simple pulse animation on click
            const progress = this.querySelector('.progress');
            if (progress) {
                progress.style.transition = 'all 0.2s ease';
                progress.style.filter = 'brightness(1.5)';
                
                setTimeout(() => {
                    progress.style.filter = 'brightness(1)';
                }, 300);
            }
        });
    });
}

/**
 * Initialize blog entries with hover effects
 */
function initBlogEntries() {
    const blogEntries = document.querySelectorAll('.blog-entry');
    
    blogEntries.forEach((entry, index) => {
        // Staggered fade-in animation
        entry.style.opacity = '0';
        entry.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            entry.style.transition = 'all 0.3s ease';
            entry.style.opacity = '1';
            entry.style.transform = 'translateY(0)';
        }, 150 + (index * 100));
        
        // Hover effect
        entry.addEventListener('mouseover', () => {
            entry.style.background = '#1e1e1e';
        });
        
        entry.addEventListener('mouseout', () => {
            entry.style.background = '#1a1a1a';
        });
        
        // Highlight code snippets on click
        const codeElements = entry.querySelectorAll('code');
        codeElements.forEach(code => {
            code.addEventListener('click', function() {
                this.style.background = '#333';
                setTimeout(() => {
                    this.style.background = '#252525';
                }, 300);
            });
        });
    });
}

/**
 * Initialize tools radar with hover effects
 */
function initToolsRadar() {
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach((item, index) => {
        // Staggered fade-in animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
        
        // Add hover effect
        item.addEventListener('mouseover', () => {
            item.style.background = '#1a1a1a';
            const status = item.querySelector('.tool-status');
            if (status) {
                status.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseout', () => {
            item.style.background = 'transparent';
            const status = item.querySelector('.tool-status');
            if (status) {
                status.style.opacity = '0.8';
            }
        });
    });
}

/**
 * Setup the contact form functionality
 */
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would send an AJAX request to your server
            // For demo purposes, we'll just show the success message
            
            // Simulating sending email to contact@ratbyte.dev
            console.log('Form submitted to contact@ratbyte.dev');
            console.log('Name:', document.getElementById('name').value);
            console.log('Email:', document.getElementById('email').value);
            console.log('Message:', document.getElementById('message').value);
            
            // Show success message
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds and show form again
            setTimeout(function() {
                formSuccess.style.display = 'none';
                contactForm.style.display = 'flex';
            }, 5000);
        });
    }
} 