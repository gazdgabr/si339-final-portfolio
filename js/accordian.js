var acc = document.getElementsByClassName("accordion");
var i;

var card = document.getElementsByClassName("Card");
var card2 = document.getElementsByClassName("cardItem2");




for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    var card = this.parentElement.parentElement;
    var card2 = this.parentElement;


    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

  });
}
