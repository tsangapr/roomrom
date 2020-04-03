// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js"></script>


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
//   firebase.analytics();
  const db = firebase.firestore();