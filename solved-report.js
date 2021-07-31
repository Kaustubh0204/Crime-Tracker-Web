var db = firebase.firestore();

const AnalyticsTableContent = document.querySelector("#AnalyticsTableContent");

db.collection("solved-report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        

        AnalyticsTableContent.innerHTML += '<tr> <td id="'+doc.data().caseid+'" class="colorchange" onclick="GetReportDetails(this.id)">'+ doc.data().caseid + '</td> <td>'+ String(doc.data().reportDateTime.toDate()).substring(0, 24) +'</td> <td>' + doc.data().incidentLocation.latitude + '° N , ' + doc.data().incidentLocation.longitude + '° E</td> <td>' + doc.data().crimeType + ' </td> <td>' + doc.data().reportersName + ' </td> <td>' + doc.data().policeAssignedName + ' </td> </tr> <tr><td colspan="6"><hr style="background-color: #FC76A1;"></td></tr>'

            
    });
    
});


function SearchReport2(){
    var searchreport = document.getElementById("searchreport2").value;
    location.hash = searchreport;
    setTimeout(function () {
        location.hash = null;
    }, 3000);
}

function GetReportDetails(bumbum){
    console.log(bumbum);
}