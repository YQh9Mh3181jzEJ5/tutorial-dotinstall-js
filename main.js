"use strict";

{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((clickedItem) => {
    clickedItem.addEventListener("click", (event) => {
      event.preventDefault();
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      clickedItem.classList.add("active");

      contents.forEach((clickedContent) => {
        clickedContent.classList.remove("active");
      });

      document.getElementById(clickedItem.dataset.id).classList.add("active");
    });
  });
}
