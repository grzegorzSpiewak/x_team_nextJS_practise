(function(){
  "use strict";

  // toggle responsive menu
  var burgerIcon = document.querySelector(".menu__toggle");
  burgerIcon.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("body").classList.toggle('body--menu-visible');
  });

  if (window.innerWidth < 1116) {
    document.onkeydown = function(e) {
      e = e || window.event;
      if (e.keyCode == 27) {
          document.querySelector("body").classList.remove('body--menu-visible');
      }
    };
  }

})();
