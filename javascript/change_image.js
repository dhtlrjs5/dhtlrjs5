function changeImage1() {
    var change_profile = document.getElementById('change_profile');
    change_profile.src = "./image/temp_images/1705213234690.jpg";
}

function changeImage2() {
    var change_profile = document.getElementById('change_profile');
    change_profile.src = "./image/temp_images/1715055581322.jpg";
}

function changeImage3() {
    var change_profile = document.getElementById('change_profile');
    change_profile.src = "./image/temp_images/1715055590747.jpg";
}

function changeIframe1() {
    var change_iframe = document.getElementById('change_iframe');
    change_iframe.src = "./mbti.html";
}

function changeIframe2() {
    var change_iframe = document.getElementById('change_iframe');
    change_iframe.src = "https://www.gachon.ac.kr/cs/5893/subview.do";
}

function changeIframe3() {
    var change_iframe = document.getElementById('change_iframe');
    change_iframe.src = "./introduce.html";
}

function changeIframe4() {
    var change_iframe = document.getElementById('change_iframe');
    change_iframe.src = "./shcedule.html";
}

const images = ["./image/food/sushi1.jpg","./image/food/sushi2.jpg","./image/food/cutlet.jpg","./image/food/hamburger.jpg","./image/food/minions.jpg","./image/food/noddle.jpg","./image/food/champagne.jpg",];
let currentIndex = 0;

document.getElementById('imageA').addEventListener('click', function() {
    var food = document.getElementById('food');
    food.src = images[currentIndex];
    food.style.display = 'block';

    currentIndex = (currentIndex + 1) % images.length;
});