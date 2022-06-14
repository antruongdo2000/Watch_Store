var bxMenu = document.querySelector("i.bx.bx-menu");
var mobileMenu = document.querySelector(".an-menu_mobile_item");
var closeBtn = document.querySelector("i.bx.bx-plus");
var overLayMenu = document.querySelector(".an-mobile_item_overlay");
var mainMenu = document.querySelector("#an-header_main");

function handleMobileMenu(element){
    element.addEventListener("click",function(){
        mobileMenu.classList.toggle("active");
    })
}

function stickyHeader(){
    window.onwheel = e => {
        if (e.deltaY >= 0){
            // Scrolling Down with mouse
            mainMenu.classList.remove("sticky");
            mainMenu.classList.add("unset_sticky");
        } 
        else {
          // Scrolling Up with mouse
            if (window.scrollY == 0) {
                mainMenu.style.position = "unset";
                mainMenu.classList.remove("sticky");
                return;
            }
            else {
                mainMenu.classList.add("sticky");
                mainMenu.classList.remove("unset_sticky");
                mainMenu.style.position = "fixed";
            }
        }
    }
}

handleMobileMenu(bxMenu);
handleMobileMenu(closeBtn);
handleMobileMenu(overLayMenu);

stickyHeader();

