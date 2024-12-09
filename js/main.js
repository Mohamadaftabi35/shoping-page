/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav__menu"),
      navToggle = document.getElementById("nav__toggle"),
      navClose = document.getElementById("nav__close")

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// =======================REMOVE MENU MOBILE============================

const navlink = document.querySelectorAll(".nav__link");
const linkAction = () =>{
const navmenu = document.getElementById("my__menu");

navMenu.classList.remove("show-menu")

}

navlink.forEach(n => n.addEventListener("click" , linkAction))

// =============================SCROLL BLUR HEADER===================================
const blurheader = () =>{
    // add header
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header")
                     :header.classList.remove("blur-header")
}

window.addEventListener("scroll" , blurheader);