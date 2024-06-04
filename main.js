const menuEmail = document.querySelector('.navbar-email')
const burguerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuDesktop = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleMenuDesktop)
burguerMenu.addEventListener('click', toggleMenuMobile)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleMenuDesktop(){
    menuDesktop.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle('inactive')
    menuDesktop.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive')
    mobileMenu.classList.toggle('inactive')
    menuDesktop.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    shoppingCartContainer.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    menuDesktop.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Motorbike',
    price: 650,
    image:'https://superbikefactory.co.uk/media/wysiwyg/bike5_1.png'
})
productList.push({
    name: 'Computer',
    price: 700,
    image:'https://img.etimg.com/thumb/width-1200,height-900,imgsize-74560,resizemode-75,msid-104220582/top-trending-products/electronics/laptops/best-gaming-computer-sets-for-an-unparalleled-experience-starting-at-just-23999.jpg'
})

rederProducts(productList);

function rederProducts(arr){
    for(product of arr){
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
    
        //product = {name,price,image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCar.appendChild(productImg);
        productCar.appendChild(productInfo);
    
        cardsContainer.appendChild(productCar);
    }
}

