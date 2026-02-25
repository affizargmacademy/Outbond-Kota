// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('show')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// Scroll Effects (Navbar & Floating Up Button)
window.addEventListener('scroll', () => {
    const btnUp = document.querySelector('.btn-up');
    if (window.scrollY > 300) {
        btnUp.classList.add('visible');
    } else {
        btnUp.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// WhatsApp Function
function openWhatsApp() {
    const phone = "6282211221909";
    const msg = "Halo Gemilang Katun Outbound, saya ingin tanya paket provider outbound Batu.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Table of Contents Toggle & Generation
document.addEventListener('DOMContentLoaded', () => {
    const tocHeader = document.querySelector('.toc-header');
    const tocList = document.querySelector('.toc-list');

    if (tocHeader && tocList) {
        tocHeader.addEventListener('click', () => {
            tocList.style.display = tocList.style.display === 'none' ? 'block' : 'none';
            const icon = tocHeader.querySelector('i');
            icon.style.transform = tocList.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        // Auto Generate TOC from H2 and H3
        const content = document.querySelector('.blog-content');
        if (content) {
            const headings = content.querySelectorAll('h2, h3');
            headings.forEach((heading, index) => {
                const id = `section-${index}`;
                heading.id = id;
                const li = document.createElement('li');
                li.style.paddingLeft = heading.tagName === 'H3' ? '20px' : '0';
                const a = document.createElement('a');
                a.href = `#${id}`;
                a.textContent = heading.textContent;
                li.appendChild(a);
                tocList.appendChild(li);
            });
        }
    }
});

// Share Functions
function shareFB() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`, '_blank');
}

function shareTW() {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}`, '_blank');
}

function shareWA() {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(location.href)}`, '_blank');
}

// SEO & AEO Optimization (Dynamically set Canonical and OG if needed)
if (!document.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = location.href;
    document.head.appendChild(link);
}
