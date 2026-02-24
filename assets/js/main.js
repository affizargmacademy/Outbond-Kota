// Sticky Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollUp = document.querySelector('.floating-up');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        scrollUp.classList.add('show');
    } else {
        nav.classList.remove('scrolled');
        scrollUp.classList.remove('show');
    }
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// WhatsApp Function
function openWhatsApp() {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor asli
    const message = "Halo Provider Outbond Batu, saya ingin menanyakan paket outbound.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Table of Contents Logic
document.addEventListener('DOMContentLoaded', () => {
    const tocHeader = document.querySelector('.toc h4');
    const tocList = document.querySelector('.toc ul');

    if (tocHeader && tocList) {
        tocHeader.addEventListener('click', () => {
            tocList.style.display = tocList.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Generate TOC items automatically if on blog detail
    const blogContent = document.querySelector('.blog-content');
    if (blogContent && tocList) {
        const headings = blogContent.querySelectorAll('h2, h3');
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.setAttribute('id', id);

            const li = document.createElement('li');
            li.style.paddingLeft = heading.tagName === 'H3' ? '20px' : '0';
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            li.appendChild(a);
            tocList.appendChild(li);
        });
    }
});

// Share Functions
function shareToFB() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareToTW() {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
}

function shareToWA() {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
}

// Mobile Menu
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.querySelector('i').classList.toggle('fa-bars');
        mobileToggle.querySelector('i').classList.toggle('fa-times');
    });
}
