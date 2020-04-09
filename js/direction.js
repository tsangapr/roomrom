let hoverFeedback = document.getElementById("hoverFeedback");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    hoverFeedback.style.display = "block";
  } else {
    hoverFeedbackn.style.display = "none";
  }
}
