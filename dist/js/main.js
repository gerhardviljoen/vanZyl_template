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
