$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();

    
  var firebaseConfig = {
    apiKey: "AIzaSyBhjyVOXRiH2a3UYr06l7d8VXK9rJjop20",
    authDomain: "clicker-4c8e8.firebaseapp.com",
    databaseURL: "https://clicker-4c8e8.firebaseio.com",
    projectId: "clicker-4c8e8",
    storageBucket: "clicker-4c8e8.appspot.com",
    messagingSenderId: "1021466765727",
    appId: "1:1021466765727:web:8fabb249ee8e4ebe99b5aa",
    measurementId: "G-Q24C1QX3CK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  console.log(database)

  $("#submit-button").on("click", function(event) {
    event.preventDefault();

var firstName = $("#first_name").val().trim();
var lastName = $("#last_name").val().trim();
var email = $("#email").val().trim();
var comment = $("#textarea").val().trim();

var newVisitor = {

    firstname: firstName,
    lastname: lastName,
    email: email,
    comment: comment,
}

database.ref().push(newVisitor)
$(".form-info").html("")
alert("Your information has been submitted!")
$("#submit-button").hide();
$("#info-check").html("<h1>Thanks!</h1>")
  });
  });
