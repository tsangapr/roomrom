

document.getElementById("one").addEventListener("click", function () {
    
    if (document.getElementById('one').classList.contains("unchecked")) {
        document.getElementById('one').classList.remove("unchecked");
        document.getElementById('one').classList.add("checked");
    } else {
        document.getElementById('one').classList.remove("checked");
        document.getElementById('one').classList.add("unchecked");
    }
});   

document.getElementById("two").addEventListener("click", function () {

    if (document.getElementById('two').classList.contains("unchecked")) {
            document.getElementById('two').classList.remove("unchecked");
            document.getElementById('two').classList.add("checked");
    } else {
            document.getElementById('two').classList.remove("checked");
            document.getElementById('two').classList.add("unchecked");
    }
});

document.getElementById("three").addEventListener("click", function () {

    if (document.getElementById('three').classList.contains("unchecked")) {
            document.getElementById('three').classList.remove("unchecked");
            document.getElementById('three').classList.add("checked");
    } else {
            document.getElementById('three').classList.remove("checked");
            document.getElementById('three').classList.add("unchecked");
    }
});

document.getElementById("four").addEventListener("click", function () {

    if (document.getElementById('four').classList.contains("unchecked")) {
            document.getElementById('four').classList.remove("unchecked");
            document.getElementById('four').classList.add("checked");
    } else {
            document.getElementById('four').classList.remove("checked");
            document.getElementById('four').classList.add("unchecked");
    }
});

document.getElementById("five").addEventListener("click", function () {

    if (document.getElementById('five').classList.contains("unchecked")) {
            document.getElementById('five').classList.remove("unchecked");
            document.getElementById('five').classList.add("checked");
    } else {
            document.getElementById('five').classList.remove("checked");
            document.getElementById('five').classList.add("unchecked");
    }
});

//---------------------------------------------------------
// Enables the "Save List" option in the navbar upon login
//---------------------------------------------------------
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("savelist").classList.remove("disabled");
    }
});

