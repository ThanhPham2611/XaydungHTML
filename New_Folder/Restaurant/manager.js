//hidden event text 
document.getElementById('showCart').style.display = "none";
document.getElementById('cartEmpty').style.display = "none";
document.getElementById('error-phone').style.display = "none";
document.getElementById('error').style.display = "none";
document.getElementById('error-p').style.display = "none";
document.getElementById('error-ad').style.display = "none";

let menu = document.querySelector('#menu-bars');
let tabbar = document.querySelector('.tabbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    tabbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let tabLinks = document.querySelectorAll('header .tabbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  tabbar.classList.remove('active');
  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      tabLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header .tabbar a[href*='+ id+']').classList
      });
    };
  });
};

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Swiper home
let swiper = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

function checkErrorName() {
    let name = document.getElementById('name').value;
    if(name == '' || name == ' ' || name == undefined){
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerHTML = 'Điền tên của bạn';
    }
    else{
        document.getElementById('error').style.display = "none";
    }
}

function checkErrorPhone() {
    let phone = document.getElementById('phone').value;
    console.log(isNaN(phone));
    if(phone == '' || phone == ' ' || phone == undefined) {
        document.getElementById('error-p').style.display = "block";
        document.getElementById('error-p').innerHTML = 'Điền số điện thoại của bạn';
    }
    else if (isNaN(phone) == true){
        document.getElementById('error-p').style.display = "none";
        document.getElementById('error-phone').style.display = "block";
        document.getElementById('error-phone').innerHTML = 'Bạn cần điền số';

    }
    else{
        document.getElementById('error-p').style.display = "none";
        document.getElementById('error-phone').style.display = "none";
    }
}

function checkErrorAddress() {
    let address = document.getElementById('address').value;
    if(address = ''){
        document.getElementById('error-ad').style.display = 'block';
        document.getElementById('error-ad').innerHTML = 'Bạn cần nhập địa chỉ';
    }
    else{
        document.getElementById('error').style.display = "none";
    }
}

