firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

      //nothing

    } else {
        window.location = "index.html";
    }
  });