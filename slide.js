// var indexValue = 1;
// showSlide(indexValue);
// function slide_but(e) {  
//     showSlide(indexValue = e);
// }

// function arrow_slide(e) {
//     showSlide(indexValue += e);
// }

// function showSlide(e){
//     var i;
//     const img = document.querySelectorAll('img');
//     const slider = document.querySelectorAll('.btn-slide span');
//     if(e > img.length){
//         indexValue = 1;
//     }
//     // Back to the last img
//     if(e < 1) {
//         indexValue = img.length;
//     }
//     for(i = 0; i < img.length; i++){
//         img[i].style.display = "none";
//     }
//     for(i = 0; i < slider.length; i++){
//         slider[i].style.background = "Silver";
//     }
//     img[indexValue - 1].style.display = "block";
//     slider[indexValue - 1].style.background = "white";
// }

const slideImage = document.querySelectorAll(".slide");
const sliderContainer = document.querySelectorAll(".images");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let curSlide = 0;

function init() {
    slideImage.forEach((img, i) => {
        img.getElementsByClassName.left = i * 100 + "%";
    })
}

// Next Button 

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
      goToSlide(0);
      return;
    }
  
    currentSlide++;
    goToSlide(currentSlide);
  });
  
  // Previous Button
  
  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(numberOfImages - 1);
      return;
    }
  
    currentSlide--;
    goToSlide(currentSlide);
  });

  function goToSlide(slideNumber) {
    slidesContainer.style.transform =
      "translateX(-" + slideWidth * slideNumber + "px)";
  
    currentSlide = slideNumber;
  
    setActiveClass();
  }
  
  // Set Active Class
  
  function setActiveClass() {
    // Set active class for Slide Image
  
    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");
  
  }