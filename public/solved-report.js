var db = firebase.firestore();

const AnalyticsTableContent = document.querySelector("#AnalyticsTableContent");


db.collection("solved-report").orderBy("caseid", "desc").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

       
        AnalyticsTableContent.innerHTML += '<tr> <td id="' + doc.data().caseid + '" class="colorchange" onclick="GetReportDetails(this.id)">' + doc.data().caseid + '</td> <td>' + String(doc.data().reportDateTime.toDate()).substring(0, 24) + '</td> <td>' + doc.data().incidentLocation.latitude.toFixed(4) + '° N , ' + doc.data().incidentLocation.longitude.toFixed(4) + '° E</td> <td>' + doc.data().crimeType + ' </td> <td>' + doc.data().reportersName + ' </td> <td>' + doc.data().policeAssignedName + ' </td> </tr> <tr><td colspan="6"><hr style="background-color: #FC76A1;"></td></tr>'


    });

  

});




function SearchReport2() {
    var searchreport = document.getElementById("searchreport2").value;
    location.hash = searchreport;
    setTimeout(function () {
        location.hash = null;
    }, 3000);
}



function GetReportDetails(solvedReportId) {

    //police
    const solvedreportreportpolicephoto = document.querySelector("#solvedreportreportpolicephoto");
    const solvedreportreportpolicephone = document.querySelector("#solvedreportreportpolicephone");
    const solvedreportreportpolicepost = document.querySelector("#solvedreportreportpolicepost");

    db.collection("solved-report").where("caseid", "==", solvedReportId)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            db.collection("police").where("email", "==", doc.data().policeAssignedEmail)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());

                    //police
                    solvedreportreportpolicephoto.innerHTML += '<span id="solvedreportreportpolicephoto2"><img src="' + doc.data().photo + '" style="height: 100px; width: 100px; border-style: solid; border-color: #FC76A1; border-radius: 50%;"> </span>';
                    solvedreportreportpolicephone.innerHTML += '<span id="solvedreportreportpolicephone2"><i class="fas fa-phone"></i> &nbsp<span style="font-weight: 700;">Contact:</span> +91 ' + doc.data().phoneNo + '</span>';
                    solvedreportreportpolicepost.innerHTML +=  '<span id="solvedreportreportpolicepost2"><i class="fas fa-star"></i> &nbsp<span style="font-weight: 700;">Post:</span> ' + doc.data().post + '</span>';
        
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });


        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


    // user
    const solvedreportuserimage = document.querySelector("#solvedreportuserimage");
    const solvedreportusername = document.querySelector("#solvedreportusername");
    const solvedreportgender = document.querySelector("#solvedreportgender");
    const solvedreportphone = document.querySelector("#solvedreportphone");
    const solvedreportemerphone = document.querySelector("#solvedreportemerphone");
    const solvedreportuseremail = document.querySelector("#solvedreportuseremail");
    const solvedreportuseraddress = document.querySelector("#solvedreportuseraddress");

    //report
    const solvedreportreportcaseid = document.querySelector("#solvedreportreportcaseid");
    const solvedreportreportdate = document.querySelector("#solvedreportreportdate");
    const solvedreportreporttime = document.querySelector("#solvedreportreporttime");
    const solvedreportreportlocation = document.querySelector("#solvedreportreportlocation");
    const solvedreportreportcrimetype = document.querySelector("#solvedreportreportcrimetype");
    const solvedreportreportdescription = document.querySelector("#solvedreportreportdescription");
    const solvedreportreportpoliceverdict = document.querySelector("#solvedreportreportpoliceverdict");

    //police
    const solvedreportreportpolicename = document.querySelector("#solvedreportreportpolicename");
    const solvedreportreportpoliceemail = document.querySelector("#solvedreportreportpoliceemail");

    db.collection("solved-report").where("caseid", "==", solvedReportId)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                // console.log(doc.id, " => ", doc.data());

                //user
                solvedreportuserimage.innerHTML += '<span id="solvedreportuserimage2"><img src="' + doc.data().reportersPhoto + '" style="height: 100px; width: 100px; border-style: solid; border-color: #FC76A1; border-radius: 50%;"></span>'
                solvedreportusername.innerHTML += '<span id="solvedreportusername2"><i class="fas fa-user"></i> &nbsp<span style="font-weight: 700;">Name:</span> ' + doc.data().reportersName + '</span>';
                if (doc.data().reportersGender == 'Male') {
                    solvedreportgender.innerHTML += '<span id="solvedreportgender2"><i class="fas fa-mars"></i> &nbsp<span style="font-weight: 700;">Gender:</span> ' + doc.data().reportersGender + '<span>';
                } else {
                    solvedreportgender.innerHTML += '<span id="solvedreportgender2"><i class="fas fa-venus"></i> &nbsp<span style="font-weight: 700;">Gender:</span> ' + doc.data().reportersGender + '<span>';
                }
                solvedreportphone.innerHTML += '<span id="solvedreportphone2"><i class="fas fa-phone"></i> &nbsp<span style="font-weight: 700;">Contact:</span> +91 ' + doc.data().reportersPhoneNo + '</span>';
                solvedreportemerphone.innerHTML += '<span id="solvedreportemerphone2"><i class="fas fa-phone-alt"></i> &nbsp<span style="font-weight: 700;">Alt contact:</span> +91 ' + doc.data().reportersEmerphoneNo + '</span>';
                solvedreportuseremail.innerHTML += '<span id="solvedreportuseremail2"><i class="fas fa-envelope"></i> &nbsp<span style="font-weight: 700;">Email:</span> ' + doc.data().reportersEmail + '</span>';
                solvedreportuseraddress.innerHTML += '<span id="solvedreportuseraddress2"><i class="fas fa-home"></i> &nbsp<span style="font-weight: 700;">Address:</span> ' + doc.data().reportersHomeAddress + '</span>';

                //report
                solvedreportreportcaseid.innerHTML += '<span id="solvedreportreportcaseid2"><i class="fas fa-exclamation-triangle"></i> &nbsp<span style="font-weight: 700;">Case ID:</span> ' + doc.data().caseid + '</span>';
                solvedreportreportdate.innerHTML += '<span id="solvedreportreportdate2"><i class="fas fa-calendar-alt"></i> &nbsp<span style="font-weight: 700;">Date: </span>' + String(doc.data().reportDateTime.toDate()).substring(0, 16) + '</span>';
                solvedreportreporttime.innerHTML += '<span id="solvedreportreporttime2"><i class="fas fa-clock"></i> &nbsp<span style="font-weight: 700;">Time: </span>' + String(doc.data().reportDateTime.toDate()).substring(16, 24) + '</span>';
                solvedreportreportlocation.innerHTML += '<span id="solvedreportreportlocation2"><i class="fas fa-map-marker-alt"></i> &nbsp<span style="font-weight: 700;">Location: </span> ' + doc.data().incidentLocation.latitude + '° N , ' + doc.data().incidentLocation.longitude.toFixed(4) + '° E </span>';
                solvedreportreportcrimetype.innerHTML += '<span id="solvedreportreportcrimetype2"><i class="fas fa-skull"></i> &nbsp<span style="font-weight: 700;">Crime type:</span> ' + doc.data().crimeType + '</span>';
                solvedreportreportdescription.innerHTML += '<span id="solvedreportreportdescription2"><i class="fas fa-info-circle"></i> &nbsp<span style="font-weight: 700;">Description:</span> ' + doc.data().reportersDescription + '</span>';
                solvedreportreportpoliceverdict.innerHTML += '<span id="solvedreportreportpoliceverdict2"><i class="fas fa-gavel"></i> &nbsp<span style="font-weight: 700;">Police verdict:</span> ' + doc.data().policeAssignedVerdict + '</span>';

                //police
                solvedreportreportpolicename.innerHTML += '<span id="solvedreportreportpolicename2"><i class="fas fa-user"></i> &nbsp<span style="font-weight: 700;">Name:</span> ' + doc.data().policeAssignedName + '</span>';
                solvedreportreportpoliceemail.innerHTML += '<span id="solvedreportreportpoliceemail2"><i class="fas fa-envelope"></i> &nbsp<span style="font-weight: 700;">Email:</span> ' + doc.data().policeAssignedEmail + '</span>';

            });

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    $('#SolvedCasesDetails').modal('show');
}

function DestroyReportDetails() {

    //user
    const solvedreportuserimage2 = document.querySelector("#solvedreportuserimage2");
    solvedreportuserimage2.remove();
    const solvedreportusername2 = document.querySelector("#solvedreportusername2");
    solvedreportusername2.remove();
    const solvedreportgender2 = document.querySelector("#solvedreportgender2");
    solvedreportgender2.remove();
    const solvedreportphone2 = document.querySelector("#solvedreportphone2");
    solvedreportphone2.remove();
    const solvedreportemerphone2 = document.querySelector("#solvedreportemerphone2");
    solvedreportemerphone2.remove();
    const solvedreportuseremail2 = document.querySelector("#solvedreportuseremail2");
    solvedreportuseremail2.remove();
    const solvedreportuseraddress2 = document.querySelector("#solvedreportuseraddress2");
    solvedreportuseraddress2.remove();

    //report
    const solvedreportreportcaseid2 = document.querySelector("#solvedreportreportcaseid2");
    solvedreportreportcaseid2.remove();
    const solvedreportreportdate2 = document.querySelector("#solvedreportreportdate2");
    solvedreportreportdate2.remove();
    const solvedreportreporttime2 = document.querySelector("#solvedreportreporttime2");
    solvedreportreporttime2.remove();
    const solvedreportreportlocation2 = document.querySelector("#solvedreportreportlocation2");
    solvedreportreportlocation2.remove();
    const solvedreportreportcrimetype2 = document.querySelector("#solvedreportreportcrimetype2");
    solvedreportreportcrimetype2.remove();
    const solvedreportreportdescription2 = document.querySelector("#solvedreportreportdescription2");
    solvedreportreportdescription2.remove();
    const solvedreportreportpoliceverdict2 = document.querySelector("#solvedreportreportpoliceverdict2");
    solvedreportreportpoliceverdict2.remove();

    //police
    const solvedreportreportpolicename2 = document.querySelector("#solvedreportreportpolicename2");
    solvedreportreportpolicename2.remove();
    const solvedreportreportpoliceemail2 = document.querySelector("#solvedreportreportpoliceemail2");
    solvedreportreportpoliceemail2.remove();
    const solvedreportreportpolicephoto2 = document.querySelector("#solvedreportreportpolicephoto2");
    solvedreportreportpolicephoto2.remove();
    const solvedreportreportpolicephone2 = document.querySelector("#solvedreportreportpolicephone2");
    solvedreportreportpolicephone2.remove();
    const solvedreportreportpolicepost2 = document.querySelector("#solvedreportreportpolicepost2");
    solvedreportreportpolicepost2.remove();

    $('#SolvedCasesDetails').modal('hide');

}