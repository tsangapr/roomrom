//---------------------------------------------------------
// Shows a pop up bubble (ex. on save list button)
//---------------------------------------------------------
function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
//--------------------------------------------------------
//--------------------End of function popup()-------------
//--------------------------------------------------------




//---------------------------------------------------------
// Enables the "Save List" option in the navbar upon login
//---------------------------------------------------------
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
      document.getElementById("savelist").classList.remove("disabled");
  }
});
//-------------------------------------------------------
//------------------End of save list function-------------
//--------------------------------------------------------



// ---------------------------------------------
// If the currently logged in user is authenticated,
// then show the person's name in the header (id="name")
// ---------------------------------------------
function showName() {
  firebase.auth().onAuthStateChanged(function (user) {
    // console.log(Navigators);
    document.getElementById("name").innerHTML = user.displayName;
  });
}
//---------------------------------------------------------
//----------------End of function showName())---------------
//--------------------------------------------------------


// ---------------------------------------------
// From index or main page, when submit button is clicked, 
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
    document.getElementById("testTo").innerHTML = origin;
    document.getElementById("testDest").innerHTML = destination;

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

function setAddListener2() {
  var origin2 = document.getElementsByName('browser1')[0];
  var destination2 = document.getElementsByName('browser2')[0];
  origin2.addEventListener('input', function() {
    document.getElementById("fromresult").innerHTML = this.value;
  })
  destination2.addEventListener('input', function() {
    document.getElementById("toresult").innerHTML = this.value;
  })
}



//----------------------------------------------------------------
//History page work in progres
//
//
//-----------------------------------------------------------------

function getHistory() {

  firebase.auth().onAuthStateChanged(function(user){
    db.collection("Navigators").doc(user.uid)
    .collection("history")
    .get()
    .then(function(snap){
      snap.forEach(function (doc) {
        let nameHistory = doc.data().name
        // let doesThisWork = nameHistory.innerHTML = "agwagwaga";
        let timeHistory = doc.data().time.toDate();
        let nameTimeHistory = (nameHistory + " --- " + timeHistory);
        let paragraphNameTime = document.createElement("p");
        // let link = document.createElement("a");
        document.getElementById("displayHistory").appendChild(paragraphNameTime);
        let nodeName = document.createTextNode(nameTimeHistory);
        paragraphNameTime.appendChild(nodeName);
        //$("#" + nameHistory).click(function () {
          //window.location.replace(nameHistory);
        // link.prepend(nodeName);
        // link.href= "https://www.google.ca";
      
        // console.log(doesThisWork);
        //create dynamic elements to show 
        //name and/or time
        //create a like button
        //when clicked, increment the "rate"
      });
      }
      );
      }
      );
      }
//--------------------------------------------------------------------
//------------------End of function getHistory()---------------------
//---------------------------------------------------------------------



//---------------------------------------------------------
//--------------------END OF FUNCTIONAL CODE---------------
//---------------------------------------------------------

 //-----------------------------------------------------------
 //-----------USESLESSS CODE BUT MIGHT BE IMPORTANT IN FUTURE 
 //-----------------------------------------------------------    

// db.collection("users").doc(user.uid)
// .collection("route-history").
// get(function(snap){
//      console.log (snap.data());  // a list of document
//      snap.forEach(function(doc){
//           console.log (doc.data())  // a doc/route
//           //display at element 
//           // inner.HTML = doc.data().name    //display se12tosw6
//      })
// })


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


