const header = document.querySelector('header').classList;
const navBtn = document.querySelector('#navBtn');
const toggleNav = () => {
    header.contains('hidden') ? header.replace('hidden', 'grid') : header.replace('grid', 'hidden');
    navBtn.children[0].innerHTML = header.contains('grid') ? 'CLOSE' : 'MENU';
}
$('.fade').slick({
    autoplay:true,
    autoplaySpeed:10000,
    dots: false,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    arrows: false
});
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

const navbar = document.getElementById("navbar").classList;
const navMenu = document.getElementById("navMenu");
const navIcon = document.getElementById("navIcon")

const navOnScroll = () => window.onscroll = () => window.innerWidth >= 1024 ? scrollFunction() : navIcon.style.width = '0';
navOnScroll()

const windowResize = () => navOnScroll();


function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.add('lg:shadow-md', 'lg:bg-white');
        navMenu.classList.replace('lg:text-white','lg:text-black');
        navIcon.style.width = '100%';
        navIcon.classList.add('text-black');
    } else {
        navbar.remove('lg:shadow-md', 'lg:bg-white');
        navMenu.classList.replace('lg:text-black','lg:text-white');
        navIcon.style.width = '0';
        navIcon.classList.remove('text-black');
    }
}

const modal = document.querySelector('#imgModal');
const modalImg = modal.children[1];
const body = document.querySelector('body');
const openImg = (e) => {            
    modal.classList.replace('hidden', 'grid')
    modalImg.setAttribute('src', e.src)
    body.classList.add('overflow-y-hidden')
}
const closeImg = (e) => {            
    modal.classList.replace('grid', 'hidden')
    body.classList.remove('overflow-y-hidden')
}