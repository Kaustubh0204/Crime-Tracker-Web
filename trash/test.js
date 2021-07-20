firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        
        window.alert("logged in");
        var user = firebase.auth().currentUser;
        
    } else {
       
        window.alert("nope");
    }
});


function login(){

    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  

// function login(){

//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

// }