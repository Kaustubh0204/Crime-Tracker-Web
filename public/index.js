function prelogin(){
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      window.location = "home.html";
      var user = firebase.auth().currentUser;

    } else {
      $('#offcanvasBottom2').offcanvas('show');
    }
  });

}


function login() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      window.location = "home.html";
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
  var userName = document.getElementById("signupname").value;
  var userLastname = document.getElementById("signuplname").value;
  var userPhoneNo = document.getElementById("signupphoneno").value;
  var userPost = document.getElementById("signuppost").value;
  var userConfirmedPass = document.getElementById("signupcpassword").value;
  
  if(userEmail && userPass && userPhoneNo && userPost!=='null' && userLastname && userName && userConfirmedPass){

      if(userPass == userConfirmedPass){
    
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
          .then((userCredential) => {

            userCredential.user.updateProfile({
              displayName: userName + " " + userLastname,
              // photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              // Update successful
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });

            var db = firebase.firestore();
            // Add a new document with a generated id.
            db.collection("police").add({
              email: userEmail,
              name: userName + " " + userLastname,
              phoneNo: userPhoneNo,
              photo: "https://imgur.com/oO6KOxx.png",
              post: userPost,

            })
              .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch((error) => {
                console.error("Error adding document: ", error);
              });

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

        }else{
          
          var confirmpasserror = 'Passwords do not match.';
          document.getElementById('error').innerHTML = confirmpasserror;
          $('#failuremodal').modal('show');
          $('#offcanvasBottom').offcanvas('hide');
           
        }

  }else{
    var emptyFielderror = 'Please fill all the fields.';
    document.getElementById('error').innerHTML = emptyFielderror;
      $('#failuremodal').modal('show');
      $('#offcanvasBottom').offcanvas('hide');
  }


  // firebase.auth().signOut().then(() => {
  //   // window.location.href = "index.html";
  // }).catch((error) => {
  //   // An error happened.
  // });
  

}




firebase.auth().onAuthStateChanged(function (user) {

  if (user) {

    // var user = firebase.auth().currentUser;
    const profileemail = document.querySelector("#profileemail");
    profileemail.innerHTML += user.email;
    const profilename = document.querySelector("#profilename");
    profilename.innerHTML += user.displayName;

  } else {
    // window.alert("Logged Out");
  }


  db.collection("police").where("email", "==", user.email)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            
          const profilepost = document.querySelector("#profilepost");
          profilepost.innerHTML += doc.data().post;

          const profilephoneno = document.querySelector("#profilephoneno");
          profilephoneno.innerHTML += "+91 " + doc.data().phoneNo;


        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

});


firebase.auth().onAuthStateChanged(function (user) {



  db.collection("police").where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

              const profilemodal = document.querySelector("#profilemodal");
              profilemodal.innerHTML += "<img id='img' src='" + doc.data().photo + "'style= ' margin: 0.2vw; height: 200px; width: 200px; border-style: solid; border-radius: 50%; border-color:#FC76A1;'>";
              // console.log(doc.data().photo + "hello")

              const profilepicicon = document.querySelector("#profilepicicon");
              profilepicicon.innerHTML += "<img src='"+ doc.data().photo +"' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal' style='margin: 0.2vw; height: 35px; width: 35px; border-radius:50%;'></img>";

          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

});



  // firebase.auth().signOut().then(() => {
  //   window.location.href = "index.html";
  // }).catch((error) => {
  //   // An error happened.
  // });











