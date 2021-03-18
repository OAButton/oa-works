(function(){
  // Initialise AOS
  AOS.init();

  // Open menu w/ hamburger icon
  var nav = document.querySelector(".header__nav"),
      navTrigger = document.querySelector(".menu-trigger"),
      menuBtn = document.getElementById("menuBtn");

  if (navTrigger) {
    navTrigger.addEventListener("click",
    function(e) {
      nav.classList.toggle("header__nav--open");
      menuBtn.classList.toggle("menu-trigger--open");
      e.preventDefault();
    }, false);
  }

  window.onscroll = function() {

    // Display back-to-top btn on scroll
    var topBtn = document.getElementById("topBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "flex";
    } else {
      topBtn.style.display = "none";
    }

    // Add class to menu btn on scroll
    var menuBtn = document.getElementById("menuBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      menuBtn.classList.add("menu-trigger--scrolled");
    } else {
      menuBtn.classList.remove("menu-trigger--scrolled");
    }
  };
})();
