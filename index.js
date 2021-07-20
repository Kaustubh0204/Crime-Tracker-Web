function login() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
  
      window.location.href = "home.html";
      var user = firebase.auth().currentUser;
  
    } else {
      window.alert("Logged Out");
    }
  });
  

  var userEmail = document.getElementById("loginemail").value;
  var userPass = document.getElementById("loginpassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });

}

function signup() {

  var userEmail = document.getElementById("signupemail").value;
  var userPass = document.getElementById("signuppassword").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      window.alert("Account created.");
      // document.getElementById("exampleModal").style.display = "block";
      // ...



    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
      // ..
    });
}



