var prevBtn = document.querySelector(".an-button-prev");
var nextBtn = document.querySelector(".an-button-next");
var slider = document.querySelector(".an-slider");
var slideItems = document.querySelectorAll(".an-slider_item");
var dots = document.querySelectorAll(".an-pagination_dot");

let slideIndex = 0;
var stepSlide = 0;

dotHandle();
dotClick();
plusSlide();
minusSlide();
touchSlide();

function showSlide(n) {
    slideItems.forEach(function(slideItem){
        slideItem.style.transform = "translateX(" + n + "%)";
    })
    stepSlide = n;
}

function minusSlide(){
    prevBtn.addEventListener("click", function(){
        if (slideIndex != 0) {
            slideIndex--;
            stepSlide=stepSlide+100;
        }
        
        dotHandle();
        showSlide(stepSlide);
    })
}

function plusSlide() {
    nextBtn.addEventListener("click", function(){
        if (slideIndex != slideItems.length - 1) {
            slideIndex++;
            stepSlide=stepSlide-100;
        }
        dotHandle();
        showSlide(stepSlide);
    })
}

function dotHandle() {
    dots[slideIndex].classList.add("active");
    $(dots[slideIndex]).siblings().removeClass("active");
    if (slideIndex == 0) {
        prevBtn.classList.add("disabled");
    }
    else {
        prevBtn.classList.remove("disabled");
    }
    if (slideIndex == slideItems.length - 1) {
        nextBtn.classList.add("disabled");
    }
    else {
        nextBtn.classList.remove("disabled");
    }
}

function dotClick() {
    dots.forEach(function(dot,index){
        dot.addEventListener("click", function(){
            slideIndex = index;
            showSlide(-100 * slideIndex);
            this.classList.add("active");
            $(this).siblings().removeClass("active");
            dotHandle();
        })
    })
}

function touchSlide(n) {
    if (navigator.msMaxTouchPoints) {
        $('#slider').addClass('ms-touch');
        $('.an-slider').on('scroll', function() {
            $('.an-slider_item').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
        });
    }
}
