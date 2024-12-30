console.log("Hello World! from My Browser Public Profiler")

document.getElementById("geoIPprofiler").onclick = function () {
    // Create Request URI Email 
    //var ip = '8.8.8.8'; 
    var ip = '';
    var api_key = 'at_iggOSSjJHkp3jgxWAasKKOi6tXkYy';
    //var api_email = 'storm-evade-ivory@duck.com';
    var api_email = '';
    var api_url = 'https://geo.ipify.org/api/v1?';
    var url = api_url + 'apiKey=' + api_key + '&email=' + api_email + '&ipAddress=' + ip;

    // Create Request
    let xmlHttp = new XMLHttpRequest();
    console.log("Querying for informatioin from URI:" + url);
    // Request to ipify for profile information
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);

    try {
        // Cast request response to JSON object
        //let obj = JSON.parse(xmlHttp.responseText);
        // Display information to our extension
        document.getElementById("geoIPresult").innerHTML = xmlHttp.responseText;
    } catch (e) {
        // Display error information to our extension
        document.getElementById("geoIPresult").innerHTML = "Error Occurred" ;
    }
};