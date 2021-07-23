



function login() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
  
      window.location.href = "home.html";
      var user = firebase.auth().currentUser;
  
    } else {
      // window.alert("Logged Out");
    }
  });
  

  var userEmail = document.getElementById("loginemail").value;
  var userPass = document.getElementById("loginpassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    document.getElementById('error2').innerHTML = errorMessage;
    $('#failuremodal2').modal('show');
    $('#offcanvasBottom2').offcanvas('hide');
    // window.alert("Error : " + errorMessage);

  });

}




function signup() {

  var userEmail = document.getElementById("signupemail").value;
  var userPass = document.getElementById("signuppassword").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then((userCredential) => {
      // Signed in 
      // var user = userCredential.user;
      $('#successmodal').modal('show');
      $('#offcanvasBottom').offcanvas('hide');
      
      // window.alert("Account created.");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      // window.alert("Error : " + errorMessage);
      document.getElementById('error').innerHTML = errorMessage;
      $('#failuremodal').modal('show');
      $('#offcanvasBottom').offcanvas('hide');
  
      // ..
    });

}



// document.getElementById("gotologin").style.display = "none";
// document.getElementById("gotologin").style.display = "block";





