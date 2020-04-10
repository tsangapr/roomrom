const SCROLLTOPNUMBER = 20;
let hoverFeedback = document.getElementById("hoverFeedback");

window.onscroll = function() {scrollFunction()};

//----------------------------------------------------------------
// Displays the scroll button in the various direction html pages.
//----------------------------------------------------------------
function scrollFunction() {
  if (document.body.scrollTop > SCROLLTOPNUMBER || document.documentElement.scrollTop > SCROLLTOPNUMBER) {
    hoverFeedback.style.display = "block";
  } else {
    hoverFeedbackn.style.display = "none";
  }
}
