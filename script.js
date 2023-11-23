const iconMenu = document.querySelector(".burger-menu_button");
const menuBody = document.querySelector(".burger-menu_nav");
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
      menuBody.classList.toggle("_active");
    });
}
