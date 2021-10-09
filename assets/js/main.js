
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () =>{
        let src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
}); 


//==================>>>>>> swiper JS <<<<<<======================================//
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
         
        },
        768: {
            slidesPerView: 2,
            
        },
       
    },
    loop:true,
    grabCursor: true,
});
// ===========================<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>==========================================

// loader

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2000);
}

window.addEventListener('load', fadeOut)