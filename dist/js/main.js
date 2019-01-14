let mobile_menu_button = document.querySelector("#btn_menu");
let menu_container = document.querySelector("#menu_container");
let header_navBar = document.querySelector("#page_header");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    header_navBar.classList.add("scroll");
  } else {
    header_navBar.classList.remove("scroll");
  }
});

mobile_menu_button.addEventListener("click", () => {
  if (mobile_menu_button.classList.contains("close")) {
    mobile_menu_button.classList.remove("close");
    menu_container.classList.remove("close");
  } else {
    mobile_menu_button.classList.add("close");
    menu_container.classList.add("close");
  }
});
