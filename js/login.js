// Get the modal
var modal = document.getElementById('myform');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQqckTfl3eR6oXD6TrgWie9WJVIXrrQBk",
  authDomain: "roomroom-60e67.firebaseapp.com",
  databaseURL: "https://roomroom-60e67.firebaseio.com",
  projectId: "roomroom-60e67",
  storageBucket: "roomroom-60e67.appspot.com",
  messagingSenderId: "910945136388",
  appId: "1:910945136388:web:dc824cfe4971426ee66a51",
  measurementId: "G-P8XL2GE708"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();