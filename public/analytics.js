var db = firebase.firestore();



var vandalism = 0;
var theft = 0;
var terrorism = 0;
var murder = 0;
var narcotics = 0;
var domesticAbuse = 0;
var assault = 0;
var suicide = 0;
var corruption = 0;
var other = 0;

var january = 0;
var february = 0;
var march = 0;
var april = 0;
var may = 0;
var june = 0;
var july = 0;
var august = 0;
var september = 0;
var october = 0;
var november = 0;
var december = 0;




db.collection("report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        if (doc.data().crimeType == "Vandalism") {
            vandalism = vandalism + 1;
            // console.log(vandalism);
        }
        if (doc.data().crimeType == "Theft") {
            theft++;
            // console.log(theft);
        }
        if (doc.data().crimeType == "Terrorism") {
            terrorism++;
        }
        if (doc.data().crimeType == "Murder") {
            murder++;
        }
        if (doc.data().crimeType == "Narcotics") {
            narcotics++;
        }
        if (doc.data().crimeType == "Domestic abuse") {
            domesticAbuse++;
        }
        if (doc.data().crimeType == "Assault") {
            assault++;
        }
        if (doc.data().crimeType == "Suicide") {
            suicide++;
        }
        if (doc.data().crimeType == "Corruption") {
            corruption++;
            // console.log(doc.data().caseid);
        }
        if (doc.data().crimeType == "Other") {
            other++;
        }


        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "01") {
            january++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "02") {
            february++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "03") {
            march++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "04") {
            april++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "05") {
            may++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "06") {
            june++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "07") {
            july++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "08") {
            august++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "09") {
            september++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "10") {
            october++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "11") {
            november++;
        }
        if (doc.data().caseid.charAt(2) + doc.data().caseid.charAt(3) == "12") {
            december++;
        }



    });

    // console.log(july);
    const data = [vandalism, theft, terrorism, murder, narcotics, domesticAbuse, assault, suicide, corruption, other];
    const data2 = [january, february, march, april, may, june, july, august, september, october, november, december];
    // console.log(data);




    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx, {

        type: 'pie',
        data: {
            labels: ['Vandalism', 'Theft', 'Terrorism', 'Murder', 'Narcotics', 'Domestic Abuse', 'Assault', 'Suicide', 'Corruption', 'Others'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }


    });


    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: ['Vandalism', 'Theft', 'Terrorism', 'Murder', 'Narcotics', 'Domestic Abuse', 'Assault', 'Suicide', 'Corruption', 'Others'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }


    });

    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx, {

        type: 'line',
        data: {
            labels: ['Vandalism', 'Theft', 'Terrorism', 'Murder', 'Narcotics', 'Domestic Abuse', 'Assault', 'Suicide', 'Corruption', 'Others'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }


    });


    var ctx = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)',
                    'rgba(220, 190, 255, 0.2)',
                    'rgba(128, 128, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)',
                    'rgba(220, 190, 255, 1)',
                    'rgba(128, 128, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx = document.getElementById('myChart5').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)',
                    'rgba(220, 190, 255, 0.2)',
                    'rgba(128, 128, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)',
                    'rgba(220, 190, 255, 1)',
                    'rgba(128, 128, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    var ctx = document.getElementById('myChart6').getContext('2d');
    var myChart6 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Crime analysis for 2021',
                data: data2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(128, 108, 80, 0.2)',
                    'rgba(170, 170, 170, 0.2)',
                    'rgba(220, 190, 255, 0.2)',
                    'rgba(128, 128, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(128, 108, 80, 1)',
                    'rgba(170, 170, 170, 1)',
                    'rgba(220, 190, 255, 1)',
                    'rgba(128, 128, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });






});






var x = document.getElementById("myChart1");
x.style.display = "block";
var x = document.getElementById("myChart2");
x.style.display = "none";
var x = document.getElementById("myChart3");
x.style.display = "none";
var x = document.getElementById("myChart4");
x.style.display = "block";
var x = document.getElementById("myChart5");
x.style.display = "none";
var x = document.getElementById("myChart6");
x.style.display = "none";


function getpie() {
    var x = document.getElementById("myChart1");
    x.style.display = "block";
    var x = document.getElementById("myChart2");
    x.style.display = "none";
    var x = document.getElementById("myChart3");
    x.style.display = "none";
    var x = document.getElementById("myChart4");
    x.style.display = "block";
    var x = document.getElementById("myChart5");
    x.style.display = "none";
    var x = document.getElementById("myChart6");
    x.style.display = "none";
}

function getbar() {
    var x = document.getElementById("myChart1");
    x.style.display = "none";
    var x = document.getElementById("myChart2");
    x.style.display = "block";
    var x = document.getElementById("myChart3");
    x.style.display = "none";
    var x = document.getElementById("myChart4");
    x.style.display = "none";
    var x = document.getElementById("myChart5");
    x.style.display = "block";
    var x = document.getElementById("myChart6");
    x.style.display = "none";
}

function getline() {
    var x = document.getElementById("myChart1");
    x.style.display = "none";
    var x = document.getElementById("myChart2");
    x.style.display = "none";
    var x = document.getElementById("myChart3");
    x.style.display = "block";
    var x = document.getElementById("myChart4");
    x.style.display = "none";
    var x = document.getElementById("myChart5");
    x.style.display = "none";
    var x = document.getElementById("myChart6");
    x.style.display = "block";
}


//solved-unsolved chart

var solvedCases = 0;
var unsolvedCases = 0;

db.collection("report").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        unsolvedCases++;


    });


    db.collection("solved-report").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            solvedCases++;

        });


        const data3 = [solvedCases, unsolvedCases];



        var ctx = document.getElementById('myChart7').getContext('2d');
        var myChart7 = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Solved Cases', 'Unsolved Cases'],
                datasets: [{
                    label: 'Crime analysis for 2021',
                    data: data3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });




    });


});

