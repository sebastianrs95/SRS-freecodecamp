$(document).ready( function() 
{

    var numChars = 11;
    var numPTags = document.getElementById("intro_text").getElementsByTagName("p").length;

    
    var icons = {
        'clear-day': 'clear_day.png', 
        'clear-night': 'clear_night.png', 
        'rain': 'rain.png', 
        'snow': 'snow.png', 
        'sleet': 'sleet.png', 
        'wind': 'wind.png', 
        'fog': 'fog.png', 
        'cloudy': 'cloudy.png', 
        'partly-cloudy-day': 'partly_cloudy.png',
        'partly-cloudy-night': 'partly_cloudy_night.png'
    }
    //bannerAnimation(numChars, numPTags, 1000, 1000 );

    // set the repeat animation button
    $("#animation").on(
        "click",
        function()
        { 
            bannerAnimation(numChars, numPTags, 1000, 1000 ); 
        }
    );

    

    function printWeather()
    {
        var json_block = $("#json_block");
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var locationUrl = 'http://ip-api.com/json';
        var weatherUrl= "https://api.darksky.net/forecast/292039917f2805743b0b74e79c688e7c/"; 
        var excludeBlock = "?exclude=[minutely, hourly, daily, alerts, flags]";

        $.getJSON(          // location api
            locationUrl, 
            function( locData )
            {
                var latitude = locData['lat'];
                var longitude = locData['lon'];

                console.log(locData['city']);

                weatherUrl += latitude + "," + longitude + excludeBlock;

                $.getJSON(      // weather api
                    proxy + weatherUrl, 
                    function(data)
                    {
                        console.log(data["timezone"]);
                        json_block.html("<p> " + data['currently']['temperature']);
                    }
                );  // end of weather api request
            }  
        );  // end of location api request

    } // end of printWeather



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /**
     * This function toggles with a fadeaway an html element
     * @param {*} id The id of the p tag.
     * @param {*} ms The number of miliseconds for setTimeout
     */
    function toggleElement( id, ms )
    {
        setTimeout( function(){ $(id).fadeToggle("slow"); }, ms);
    }


    /**
     * A function that toggles the animation for a logo banner.
     * 
     * @param {*} numChars The number of characters of the banner.
     * @param {*} numPTags The number of p tags that are used.
     * @param {*} ms The initial timeout for the animation to start.
     * @param {*} timeGap The step increment for the timeouts.
     */
    function bannerAnimation(numChars, numPTags, ms, timeGap )
    {
        for( var i = 1 ; i <= numChars ; ++i) $("#"+i).hide();
        for( i = 1 ; i <= numPTags ; ++i) $("#p"+i).hide();

        $("#json_div").hide();
        $("#animation").hide();

        var timeStep = 0;
        
        for( i = 1 ; i <= numPTags ; ++i )
        {
            for( j = 2 ; j >= 1 ; --j )     // this loop first adds double the timegap, and then its original value
            {
                toggleElement("#p"+i, ms + timeStep);
                timeStep += timeGap*j;
            }
        }
        
        setTimeout( function(){ toggleLogo(numChars);}, ms + timeStep);

        // shows the repeat animation button one second after the animation finishes
        setTimeout( function(){ $("#animation").show();} , ms + timeStep + 1000 );    
        setTimeout( function(){ $("#json_div").show();} , ms + timeStep + 1000 );
    }   

    
    /**
     * Toggles a logo character by character with a fadeaway effect.
     * @param {*} numChars The number of characters of the logo.
     */
    function toggleLogo( numChars )
    {
        for( var i = 1 ; i <= numChars ; ++i )
        {
            $("#"+i).fadeToggle(i*100);
        }
    }

});     // end of document ready