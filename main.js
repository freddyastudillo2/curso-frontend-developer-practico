const menuEmail = document.querySelector('.navbar-email')
const burguerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuDesktop = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoCompras = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMenuDesktop)
burguerMenu.addEventListener('click', toggleMenuMobile)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleMenuDesktop(){
    const isAsideClosed = menuCarritoCompras.classList.contains('inactive');
    
    if(!isAsideClosed){
        menuCarritoCompras.classList.add('inactive')
    }

    menuDesktop.classList.toggle('inactive')
}

function toggleMenuMobile(){
    const isAsideClosed = menuCarritoCompras.classList.contains('inactive');
    
    if(!isAsideClosed){
        menuCarritoCompras.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    menuCarritoCompras.classList.toggle('inactive')
}