
var slideItemsRelated = document.querySelectorAll(".an-product-related_main_item");
var prevBtnRelated = document.querySelector(".an-product-related_main i.bx.bx-chevron-left");
var nextBtnRelated = document.querySelector(".an-product-related_main i.bx.bx-chevron-right");
var slideIndexRelated = 0;
var stepSlideRelated = 0;

var slideItemsRecent = document.querySelectorAll(".an-product-recent_main_item");
var prevBtnRecent = document.querySelector(".an-product-recent_main i.bx.bx-chevron-left");
var nextBtnRecent = document.querySelector(".an-product-recent_main i.bx.bx-chevron-right");
var slideIndexRecent = 0;
var stepSlideRecent = 0;

var tabTitles = document.querySelectorAll(".an-tab_title");
var tabMHeader = document.querySelectorAll(".an-m-tab_header");
var tabItems = document.querySelectorAll(".an-tab_item");

minusSlide(slideItemsRelated, slideIndexRelated, stepSlideRelated, prevBtnRelated);
plusSlide(slideItemsRelated, slideIndexRelated, stepSlideRelated, nextBtnRelated);

minusSlide(slideItemsRecent, slideIndexRecent, stepSlideRecent, prevBtnRecent);
plusSlide(slideItemsRecent, slideIndexRecent, stepSlideRecent, nextBtnRecent);

handleTab(tabTitles, "add");
handleTab(tabMHeader, "toggle");


function showSlide(n, element) {
    element.forEach(function(slideItem){
        slideItem.style.transform = "translateX(" + n + "%)";
    })
    stepSlide = n;
}

function minusSlide(element, slideIndex, stepSlide, preBtn){
    preBtn.addEventListener("click", function(){
        if (slideIndex != 0) {
            slideIndex--;
            stepSlide=stepSlide+200;
        }
        else {
            slideIndex = 2;
            stepSlide = (element.length - 6) * (-200);
        }
        
        // dotHandle();
        showSlide(stepSlide, element);
    })
}

function plusSlide(element, slideIndex, stepSlide, nextBtn) {
    nextBtn.addEventListener("click", function(){
        if (slideIndex != element.length - 6) {
            slideIndex++;
            stepSlide=stepSlide-200;
        }
        else {
            slideIndex = 0;
            stepSlide = 0;
        }
        // dotHandle();
        showSlide(stepSlide, element);
    })
}

function handleTab(element, action){
    element.forEach(function(tabTitle, titleIndex){
        tabTitle.addEventListener("click", function(){

            this.classList[action]("active");
            $(this).siblings().removeClass("active");

            tabItems[titleIndex].classList[action]("active");
            $(tabItems[titleIndex]).siblings().removeClass("active");
            $(tabItems[titleIndex]).siblings().find(".an-m-tab_header").removeClass("active");

        })
    })
}
