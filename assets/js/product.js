
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

var dropdownText = document.querySelector(".an-sort_text");
var dropdownItems = document.querySelectorAll(".an-sort_item");
var dropdownHeader = document.querySelector(".an-sort_header");
var dropdownWrapper = document.querySelector(".an-sort_wrapper");
var dropdownOverlay = document.querySelector(".an-sort_overlay");

var writeRevBtn = document.querySelector(".an-write_review");
var widgetForm = document.querySelector(".an-review-widget_form");

var histogramBars = document.querySelectorAll(".an-histogram_bar-content");

var starRatings = document.querySelectorAll(".an-form_rating .an-star");

var actionReacts = document.querySelectorAll(".an-action_react i");

var thumbnailItems = document.querySelectorAll(".an-product_thumbnail-item");
var productImage = document.querySelector(".an-product_main-img");
var main_imgs = document.querySelector(".an-main_img-item");

var plusQuantityBtn = document.querySelector(".i.bx.bx-plus");
var minusQuantityBtn = document.querySelector(".i.bx.bx-minus");
var outerQuantityBtn = document.querySelector(".an-quantity_input::-webkit-outer-spin-button");
var innerQuantityBtn = document.querySelector(".an-quantity_input::-webkit-inner-spin-button");

var wishListBtn = document.querySelector(".an-product_wishlist i.bx.bx-heart");

handleThumbnailClick();

minusSlide(slideItemsRelated, slideIndexRelated, stepSlideRelated, prevBtnRelated);
plusSlide(slideItemsRelated, slideIndexRelated, stepSlideRelated, nextBtnRelated);

minusSlide(slideItemsRecent, slideIndexRecent, stepSlideRecent, prevBtnRecent);
plusSlide(slideItemsRecent, slideIndexRecent, stepSlideRecent, nextBtnRecent);

handleTab(tabTitles, "add");
handleTab(tabMHeader, "toggle");

handleDropDown(dropdownHeader, dropdownWrapper);

toggleWidgetForm();

handleHistogramBar();

handleRating("mouseover");
// handleRating("click");

handleActionReact();

// handleQuantity();

handleWishList();

function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleQuantity() {
    plusQuantityBtn.addEventListener("click", function(){
        $(innerQuantityBtn).click();
    })
    minusQuantityBtn.addEventListener("click", function(){
        $(outerQuantityBtn).click();
    })
}

function handleWishList(){
    wishListBtn.addEventListener("click", function(){
        this.parentElement.classList.toggle("active");
        if (this.parentElement.classList.contains("active")) {
            this.classList.replace(this.classList[1], "bxs-heart");
        }
        else {
            this.classList.replace(this.classList[1], "bx-heart");
        }
        
    })
}

function handleThumbnailClick() {
    thumbnailItems.forEach(function(thumbnailItem, thumbnailIndex) {
        
        //create a main_img
        var main_img = document.createElement("div");
        main_img.setAttribute("class", "an-main_img-item");
        productImage.appendChild(main_img);
        
        main_img.innerHTML = thumbnailItem.innerHTML;
        
        if (thumbnailIndex == 0) {
            main_img.classList.add("is-selected");
        }
        
        // thumbnail Click event
        thumbnailItem.addEventListener("click", function() { 
            this.classList.add("active");
            $(this).siblings().removeClass("active");

            main_img.classList.add("is-selected");
            $(main_img).siblings().removeClass("is-selected");
            
            if(isMobile()) {
                $(main_img).siblings().css("transform","translateX(" + thumbnailIndex*(-100) + "%)");
                main_img.style.transform = "translateX(" + thumbnailIndex*(-100) + "%)";
            }
            else {
                main_img.style.transform = "translateY(" + thumbnailIndex*(-100) + "%)";
                $(main_img).siblings().css("transform","translateY(" + thumbnailIndex*(-100) + "%)");
            }

        })
        
        
    })
}

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

function handleDropDown(dropHeader, dropWrapper) {
    dropHeader.addEventListener("click", function() {
        dropWrapper.classList.toggle("active");
        this.classList.toggle("active");
        // dropOverlay.classList.toggle("active");
    })

    // dropOverlay.addEventListener("click", function() {
    //     dropWrapper.classList.toggle("active");
    //     this.classList.remove("active");
    // })

    dropdownItems.forEach(function(dropdownItem) {
        dropdownItem.addEventListener("click", function() {
            this.classList.add("active");
            $(this).siblings().removeClass("active");

            dropdownText.innerText = this.innerText;
            dropWrapper.classList.toggle("active");
            dropHeader.classList.toggle("active");
            // dropOverlay.classList.remove("active");
        })
        
    })
}

function toggleWidgetForm() {
    writeRevBtn.addEventListener("click", function(e) {
        widgetForm.classList.toggle("active");
    })
}

function handleHistogramBar(){
    histogramBars.forEach(function(histogramBar) {
        var histogramPercent = histogramBar.parentElement.parentElement.querySelector(".an-histogram_percentage").innerHTML;
        histogramBar.style.width = histogramPercent;
    })
}

function handleRating(eventListen) {
    starRatings.forEach(function(starRating, ratingIndex){
        starRating.addEventListener(eventListen, function(){
            starRatings.forEach(function(starRate, ratingJndex) {
                if (ratingJndex <= ratingIndex) {
                    starRate.classList.replace(starRate.classList[1],"bxs-star");
                }   
                else {
                    starRate.classList.replace(starRate.classList[1],"bx-star");
                }        
            })              
        })             
    })
}

function handleActionReact(){
    actionReacts.forEach(function(actionReact){
        actionReact.addEventListener("click", function(){
            this.classList.toggle("active");
            $(this).siblings().removeClass("active");
        })
    })
}

