var db = firebase.firestore();

const userreports = document.querySelector("#userreports");

db.collection("report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        userreports.innerHTML += "<div class='col'> <div class='card text-white bg-dark mb-3' style='min-width: 18rem; border-style: solid; border-color: #FC76A1; z-index: 1;'> <div class='card-header'><i class='fas fa-exclamation-triangle' style='color: #FC76A1;'></i> Case ID #" + doc.data().caseid +" <a href='#map' id='fly' style='background-color: #FC76A1; padding: 8px; font-size: 18px; border-radius: 1vw; float: right; margin: 0.5vw;'><i class='fas fa-crosshairs'></i></a></div> <div class='card-body'> <h5 class='card-title'><i class='fas fa-skull' style='color: #FC76A1;'></i> " +doc.data().crimeType+"</h5> <hr> <p class='card-text'><i class='fas fa-user' style='color: #FC76A1;'></i> " + doc.data().name + "<hr><i class='fas fa-phone' style='color: #FC76A1;'></i> +91 "+doc.data().phoneNo+ "<hr><i class='fas fa-map-marker-alt' style='color: #FC76A1;'></i> "+ doc.data().location.latitude+"° N , "+doc.data().location.longitude+"° E<hr><i class='fas fa-info-circle' style='color: #FC76A1;'></i> "+ doc.data().description+"</p> </div> </div>"

    });
});


