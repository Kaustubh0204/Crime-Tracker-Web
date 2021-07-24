var db = firebase.firestore();

const userreports = document.querySelector("#userreports");

db.collection("report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        userreports.innerHTML += "<div class='col'> <div class='card text-white bg-dark mb-3' style='min-width: 18rem; border-style: solid; border-color: #FC76A1; z-index: 1;'> <div class='card-header'><i class='fas fa-exclamation-triangle' style='color: #FC76A1;'></i> Case ID #" + doc.data().caseid + " <a href='#map' onClick='reply_click(this.id)' id='" + doc.data().caseid + "' style='background-color: #FC76A1; padding: 8px; font-size: 18px; border-radius: 1vw; float: right; margin: 0.5vw;'><i class='fas fa-crosshairs'></i></a></div> <div class='card-body'> <h5 class='card-title'><i class='fas fa-skull' style='color: #FC76A1;'></i> " + doc.data().crimeType + "</h5> <hr> <p class='card-text'><i class='fas fa-user' style='color: #FC76A1;'></i> " + doc.data().name + "<hr><i class='fas fa-phone' style='color: #FC76A1;'></i> +91 " + doc.data().phoneNo + "<hr><i class='fas fa-map-marker-alt' style='color: #FC76A1;'></i> " + doc.data().location.latitude + "° N , " + doc.data().location.longitude + "° E<hr><i class='fas fa-info-circle' style='color: #FC76A1;'></i> " + doc.data().description + "</p> </div> </div>"
        var el = document.createElement('div');
        el.className = 'marker';
        var marker = new mapboxgl.Marker(el)
            .setLngLat([doc.data().location.longitude, doc.data().location.latitude])
            .setPopup(new mapboxgl.Popup().setHTML("<h5>Case ID #" + doc.data().caseid + "</h5><hr><h6 style='text-align: left'><i class='fas fa-skull-crossbones'></i> " + doc.data().crimeType + "</h6>" + "<h6 style='text-align: left'><i class='fas fa-phone-alt'></i> +91 " + doc.data().phoneNo + "</h6>" + "<h6 style='text-align: left'><i class='fas fa-map-pin'></i> " + doc.data().location.latitude + " | " + doc.data().location.longitude + "</h6>"))
            .addTo(map);

    });
});



function reply_click(clicked_id) {

    // console.log(clicked_id);
    db.collection("report").where("caseid", "==", clicked_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                 var lat = doc.data().location.latitude;
                 var lon = doc.data().location.longitude;

                // document.getElementById(clicked_id).addEventListener('click', function () {
                    map.flyTo({
                        center: [
                            lon, lat
                        ],
                        essential: true,
                        zoom: 15
                    });
                // });


            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}





