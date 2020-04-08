function setAddListenerNonUser() {
    document.getElementById("submitNonUser").addEventListener("click", function (e) {
      let origin = document.getElementById("from").value;
      let destination = document.getElementById("to").value;
      console.log(orgin);
      // if (origin == destination) {
        // var newPage = "error_page.html";
      //   document.getElementById("testTo").innerHTML = "Please pick different locations";
  
      // } else {
      // var newPage = origin + "_" + destination + ".html";
      // }
      document.getElementById("testTo").innerHTML = origin;
      document.getElementById("testDest").innerHTML = destination;
      // window.location.replace(newPage);
    });
  }