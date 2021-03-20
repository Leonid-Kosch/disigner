function menuOpen () {
    let menuBtn = document.querySelector('#menu-btn');
    let nav = document.querySelector('#nav');
    let body = document.querySelector('#body');
    menuBtn.onclick = function () {
        menuBtn.classList.toggle('menu-btn_active');
        nav.classList.toggle('nav_active');
        body.classList.toggle('scroll-none');
    }
    let navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(function (navLink) {
        navLink.onclick = function () {
            menuBtn.classList.remove('menu-btn_active');
            nav.classList.remove('nav_active');
            body.classList.remove('scroll-none');
        }
    }) 
}
menuOpen(); 
// Ниже мы будем писать программу, для исчезновения кнопки при скроле вниз, и появление при скроле вверх 
function menuBtnShow () {
    let firstScroll = window.pageYOffset;
    document.getElementById('menu-btn').style.top = "10px";
    window.onscroll = function () {
        let lastScroll = window.pageYOffset;
        if (firstScroll < lastScroll) {
            document.getElementById('menu-btn').style.top = "-100px";
        } else {
            document.getElementById('menu-btn').style.top = "10px";
        }
        firstScroll = lastScroll;
    }
}
menuBtnShow ();