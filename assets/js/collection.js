var switchItemIcons = document.querySelectorAll(".an-layout_switch-item span");
var collectionMain = document.querySelector(".an-row.an-collection_main");

var dropdownHeader = document.querySelector(".an-dropdown_header");
var dropdownMHeader = document.querySelector(".an-m-dropdown_header")
var dropdownWrapper = document.querySelector(".an-dropdown_wrapper");
var dropdownMWrapper = document.querySelector(".an-m-dropdown_wrapper");
var dropdownItems = document.querySelectorAll(".an-dropdown_item");
var dropdownOverlay =  document.querySelector(".an-dropdown_overlay");
var dropdownText = document.querySelector(".an-dropdown_text");

var filterBtn = document.querySelector(".an-filter_btn");
var filterWrapper = document.querySelector(".an-collection_filter-wrapper");
var filterOverlay = document.querySelector(".an-collection_filter-overlay");
var closeFilterBtn = document.querySelector(".an-filter_close");

openFilter();
closeFilter(closeFilterBtn);
closeFilter(filterOverlay);
handleDropDown(dropdownHeader, dropdownWrapper, dropdownOverlay);
handleDropDown(dropdownMHeader, dropdownMWrapper, dropdownOverlay);
switchItem();

function isMobile() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function openFilter(){
    filterBtn.addEventListener("click", function(){
        filterWrapper.classList.add("active");
        filterOverlay.classList.add("active");
    })
}

function closeFilter(element){
    element.addEventListener("click", function(){
        filterWrapper.classList.remove("active");
        filterOverlay.classList.remove("active");
    })
}

function handleDropDown(dropHeader, dropWrapper, dropOverlay) {
    dropHeader.addEventListener("click", function() {
        dropWrapper.classList.toggle("active");
        this.classList.toggle("active");
        dropOverlay.classList.toggle("active");
    })

    dropOverlay.addEventListener("click", function() {
        dropWrapper.classList.toggle("active");
        this.classList.remove("active");
    })

    dropdownItems.forEach(function(dropdownItem) {
        dropdownItem.addEventListener("click", function() {
            this.classList.add("active");
            $(this).siblings().removeClass("active");

            dropdownText.innerText = this.innerText;
            dropWrapper.classList.toggle("active");
            dropHeader.classList.toggle("active");
            dropOverlay.classList.remove("active");
        })
        
    })
}

function switchItem() {
    switchItemIcons.forEach(function(switchItemIcon){

        switchItemIcon.addEventListener("click", function(){

            this.parentElement.classList.add("active");
            $(this).parent().siblings().removeClass("active");  
            var data_col = this.parentElement.getAttribute("data-col");
            collectionMain.classList.replace(collectionMain.classList[2], "row-" + data_col);
        })
        if (isMobile()) {
            $(".an-layout_switch-item[data-col='2'").addClass("active");
        }
    });
}