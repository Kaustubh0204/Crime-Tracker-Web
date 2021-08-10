function logout(){
   
    firebase.auth().signOut().then(() => {
      window.location.href = "index.html";
    }).catch((error) => {
      // An error happened.
    });
  }