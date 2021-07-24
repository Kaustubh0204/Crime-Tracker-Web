firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    window.location.href = "index2.html";
    var user = firebase.auth().currentUser;

  } else {
    window.alert("bye");
  }
});

function login() {

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });

}




function logout() {

  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  }).catch((error) => {
    // An error happened.
  });


}

