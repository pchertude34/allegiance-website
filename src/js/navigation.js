document.addEventListener("DOMContentLoaded", function () {
  var mobileMenuCloseButton = document.getElementById("menu-close");
  var mobileMenuButton = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var mobileMenuItems = document.getElementById(
    "mobile-menu-item-list",
  ).children;

  // Show the mobile menu when the menu button is clicked
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Hide the mobile menu when the close button is clicked
  mobileMenuCloseButton.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });

  console.log("mobileMenuItems", mobileMenuItems);

  for (var i = 0; i < mobileMenuItems.length; i++) {
    mobileMenuItems[i].addEventListener("click", function () {
      // Hide the mobile menu when a menu item is clicked
      mobileMenu.classList.add("hidden");
    });
  }
});
