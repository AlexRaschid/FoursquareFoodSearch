$(document).ready(function(){
    //In key, client_id, client_secret, and version(YYYYMMDD) are all pameters. New parameter should me + & 
    var api= "https://api.foursquare.com/v2/venues/search?client_id=KVHBKSBUSENBBY0EIYOVW2V5ADDHMG3X33MI4EDSF2KP5JLA&client_secret=JC0F3TAWFDENJFGQPFO33GMWQSX2MY01TMAMNUKITYWPGMJN&v=20170301";
    
    $('button').on('click', function(event) {



        var food = $('#inputFood').val();
        var location = $('#inputLocation').val();
        var URL = "https://api.foursquare.com/v2/venues/search?"+
        "client_id=KVHBKSBUSENBBY0EIYOVW2V5ADDHMG3X33MI4EDSF2KP5JLA&"+
    "client_secret=JC0F3TAWFDENJFGQPFO33GMWQSX2MY01TMAMNUKITYWPGMJN&v=20170301&"+
        "near="+ location +
        "&query=" + food;

        $.get(URL, function(data) {
            var venues = data.response.venues;
            var myresult = "";
            for (var i = 0; i < 10; i++) {
                myresult += "<li>NAME: " + venues[i].name; "</li>"
            }
            $("#result").html(myresult);
        })
    });

    
})