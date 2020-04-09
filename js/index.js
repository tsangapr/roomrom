//---------------------------------------------------------
// Shows a pop up bubble (ex. on save list button)
//---------------------------------------------------------
function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//---------------------------------------------------------
// Shows a pop up bubble (ex. on feedback page button)
//---------------------------------------------------------
function popup1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show1");
  }

//--------------------------------------------------------
//---------End of function popup() and popup1()-----------
//--------------------------------------------------------



//---------------------------------------------------------
// Shows a pop up bubble (ex. on feedback page button)
//---------------------------------------------------------
function pleaseLogIn() {
  document.getElementById("indexSubmit").innerHTML = "<br>" + "Please Log In to proceed.";
}
//--------------------------------------------------------
//-------------End of log in message function-------------
//--------------------------------------------------------



//---------------------------------------------------------
// Enables the "Save List" option in the navbar upon login
//---------------------------------------------------------
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      document.getElementById("savelist").classList.remove("disabled");
  }
});
//--------------------------------------------------------
//------------------End of save list function-------------
//--------------------------------------------------------



// ------------------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's name in the header (id="name")
// ------------------------------------------------------
function showName() {
  firebase.auth().onAuthStateChanged(function (user) {
    // console.log(Navigators);
    document.getElementById("name").innerHTML = user.displayName;
  });
}
//--------------------------------------------------------
//----------------End of function showName())-------------
//--------------------------------------------------------



// ---------------------------------------------
// From main page, when submit button is clicked, 
// (get the id=fromBrowser and the id=toBrower, concatenate them together
// and compare to what is in the database in order to pull out the 
// document containing the reference(link) to the appropriate direction page.)
//
// href="link" with link replaced by the contents 
// ---------------------------------------------
function setAddListener() {
  document.getElementById("submit").addEventListener("click", function (e) {
    var origin = document.getElementById("from").value;
    var destination = document.getElementById("to").value;
    if (origin == destination) {
      // var newPage = "error_page.html";
      document.getElementById("testTo").innerHTML = "Please pick different locations";

    } else {
    var newPage = origin + "_" + destination + ".html";
    }


//------------------------------------------------------------------------
//When a logged-in user selects an orgin, then selects a destination,
//the moment the user clicks submit; "routeObject" is created &
//saved into the users "History" collection in firebase. User is then
//redirected to the selected html page.
//------------------------------------------------------------------------

    var routeObject = {
      name: newPage,
      time: firebase.firestore.FieldValue.serverTimestamp()   
    }
    firebase.auth().onAuthStateChanged(function (user) {
    db.collection("Navigators").doc(user.uid)
    .collection("history")
    .add(routeObject) //auto gen id
    .then(function() {
      window.location.replace(newPage);
    });
  });
});
}



//----------------------------------------------------------------
//                           History page
//
//
//----------------------------------------------------------------
function getHistory() {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("Navigators").doc(user.uid)
      .collection("history")
      .get()
      .then(function (snap) {
        snap.forEach(function (doc) {
          let nameHistory = doc.data().name;
          let userHistoryId = doc.id;
          let timeHistory = doc.data().time.toDate();
          let nameTimeHistory = (nameHistory + " --- " + timeHistory);
          let paragraphNameTime = document.createElement("p");
          paragraphNameTime.setAttribute("id", userHistoryId)
          document.getElementById("displayHistory").appendChild(paragraphNameTime);
          let nodeName = document.createTextNode(nameTimeHistory);
          paragraphNameTime.appendChild(nodeName);
          $("#" + userHistoryId).click(function () {
            window.location.replace(nameHistory);

          });
        });
      }
      );
  }
  );
}
//-------------------------------------------------------------------
//------------------End of function getHistory()---------------------
//-------------------------------------------------------------------



//---------------------------------------------------------
//--------------------END OF FUNCTIONAL CODE---------------
//---------------------------------------------------------

