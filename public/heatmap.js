var db = firebase.firestore();

var heatmarkers1;
var heatmarkers2 = "";

db.collection("report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        
        heatmarkers1 = '{ "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [ '+ doc.data().location.longitude + ', '+ doc.data().location.latitude +' ] } },'
        heatmarkers2 = heatmarkers2 + heatmarkers1;

    });

    
    console.log(heatmarkers2);

});

