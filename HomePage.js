// var responsiveSlider = function() {
//     var slider = document.getElementsByClassName("article6slider");
//     var sliderWidth = slider.offsetWidth;
//     var slideList = document.getElementsByClassName("slideWrap");
//     var count = 1;
//     var items = slideList.getElementsByClassName("li").length;
//     var prev = document.getElementById("prev");
//     var next = document.getElementById("next");

//     window.addEventListener('resize', function() {
//     sliderWidth = slider.offsetWidth;
// });
// var nextSlide = function() {
//     if(count < items) {
//         slideList.style.left = "-" + count * sliderWidth + "px";
//         count++;
//     }
//     else if(count = items) {
//         slideList.style.left = "0px";
//         count = 1;
//     }
// };
// var prevSlide = function() {
//     if(count > 1) {
//         count = count - 2;
//         slideList.style.left = "-" + count * sliderWidth + "px";
//         count++;
//     }
//     else if(count = 1) {
//         count = items - 1;
//         slideList.style.left = "-" + count * sliderWidth + "px";
//         count++;
//     }
// };
// next.addEventListener("click", function() {
//     nextSlide();
// });
// prev.addEventListener("click", function() {
//     prevSlide();
// });
// setInterval(function() {
//     nextSlide()
// }, 8000);

// };

function fb() {
    window.location.href = 'https://www.facebook.com/rodanandfields';
}

function twit() {
    window.location.href = 'https://twitter.com/RodanFieldsHQ';
}

function insta() {
    window.location.href = 'https://www.instagram.com/rodanandfields/';
}
function you() {
    window.location.href = 'https://www.youtube.com/user/RodanFields';
}
function pinte() {
    window.location.href = 'https://in.pinterest.com/RodanandFields/';
}

document.querySelector("#leftheader1").addEventListener("click", gotobecomeAcons);

function gotobecomeAcons() {
    window.location.href = "becomeAConsultant.html"
}