//---------------------------------------------------------
// Shows a pop up bubble (ex. on save list button)
//---------------------------------------------------------

function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }



//---------------------------------------------------------
// Enables the "Save List" option in the navbar upon login
//---------------------------------------------------------
firebase.auth().onAuthStateChanged(function(Navigators) {
  if (Navigators) {
      document.getElementById("savelist").classList.remove("disabled");
  }
});

// ---------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's name in the header (id="name")
// ---------------------------------------------
function showName() {
  firebase.auth().onAuthStateChanged(function (Navigators) {
    console.log(Navigators);
    document.getElementById("name").innerHTML = Navigators.displayName;
  });
}

// ---------------------------------------------
// From main page, when submit button is clicked, 
// (get the id=fromBrowser and the id=toBrower, concatenate them together
// and compare to what is in the database in order to pull out the 
// document containing the reference(link) to the appropriate direction page.)
//
// href="link" with link replaced by the contents 
// ---------------------------------------------
db.collection("users").doc(user.uid)
.collection("route-history").
.get(function(snap){
     console.log (snap.data());  // a list of document
     snap.forEach(function(doc){
          console.log (doc.data())  // a doc/route
          //display at element 
          // inner.HTML = doc.data().name    //display se12tosw6
     })
})


// // ---------------------------------------------
// // If no log in, display id="nonuser" header,
// // If user logged in, display id="user" header. 
// // ---------------------------------------------
// function showHeader() {
//   firebase.auth().onAuthStateChanged(function (Navigators) {

    
//       let anc = document.createElement("a");
//       anc.href = "main.html"
      
//       document.getElementById("nonuserheading").outerHTML = anc.href;
//       document.getElementById("nonuserheading").innerHTML = 
//       <p id="afterlogin">Welcome back, <span id="name">Friend</span></p>
          


// var anc = document.createElement("a");
// anc.href = "https://developer.mozilla.org?a=b&c=d";
// console.log(anc.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
//     }
//     // console.log(Navigators);
//     // document.getElementById("name").innerHTML = Navigators.displayName;
//   });
// }

  