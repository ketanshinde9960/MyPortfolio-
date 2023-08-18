// ========== Menu show Y Hidden ===========

const navMenuEl = document.getElementById('navMenu');
const navToggleEl = document.getElementById('navToggle');
const navCloseEl = document.getElementById('navClose');



// ========== Menu Show =========


navToggleEl.addEventListener('click', () => {
    navMenuEl.classList.add('show-menu');
})

navCloseEl.addEventListener('click', () => {
    navMenuEl.classList.remove('show-menu');
})


// ========== Remove menu mobile ===========

const navLinkEl = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenuEl = document.getElementById('navMenu');
    navMenuEl.classList.remove('show-menu');
}
navLinkEl.forEach(n => n.addEventListener('click', linkAction));


// =============== Accordion Skills ===============

const skillsContentEl = document.getElementsByClassName('skills-content');
const skillsHeaderEl = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContentEl.length; i++) {
        skillsContentEl[i].className = 'skills-content skills-close';
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }
}

skillsHeaderEl.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

// ================ Qualification Tabs ===========

const tabsEl = document.querySelectorAll('[data-target]');
const tabContentEl = document.querySelectorAll('[data-content]');

tabsEl.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetEl = document.querySelector(tab.dataset.target);

        tabContentEl.forEach(tabContent => {
            tabContent.classList.remove('qualification-active');
        })
        targetEl.classList.add('qualification-active');

        tabsEl.forEach(tab => {
            tab.classList.remove('qualification-active');
        })
        tab.classList.add('qualification-active ');
    })
})

// ============== Services Modal ===============

const modalViewsEl = document.querySelectorAll('.services-modal');
const modalBtnsEl = document.querySelectorAll('.services-button');
const modalClosesEl = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
    modalViewsEl[modalClick].classList.add('active-modal');
}

modalBtnsEl.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalClosesEl.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViewsEl.forEach((modalViews) => {
            modalViews.classList.remove("active-modal")
        })
    })
})



/* ============= Portfolio Swiper =========== */

let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/* ============= Testimonial Swiper =========== */

let swiperTestimonial = new Swiper('.testimonial-container', {
    // cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});
