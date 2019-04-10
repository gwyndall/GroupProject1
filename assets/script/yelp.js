function searchYelp() {
    

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972";
    var apiKey = "8tYUenwnc30zfZ_BU_6dIkyQM6X8MI1S9hGxquW7h0EtrBfG2vuhDsQNXqItzVm4822tyG6DZ_v-m0-H31za-2yCALyGz7A72nn3Tk95fMg7U_vouW72kaFg8wmsXHYx" 
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
            "Authorization": `Bearer ${apiKey}`
         }
     }).then(function(res) {
         var results = res.businesses
         for (let idx = 0; idx < results.length; idx++) {
                var respData = results[idx]
        
                // Creating a div to hold the gifs
                var gifDiv = $("<div class='gifs'>").attr("data-state", "still");
                
                // Retrieving the URL for the image
                var imgURL = respData.image_url;
                
                // Creating an element to hold the still image
                var image = $("<img>").attr("src", imgURL);
               
                // Appending the image
                gifDiv.append(image);
                
                // Storing the rating data
                var rating = respData.rating;
                
                // Creating an element to have the rating displayed
                var pRating = $("<p class='rated'>").text("Rated: " + rating);
                
                // Displaying the rating
                gifDiv.append(pRating);
                
                // Adding new gifs to the top of the display
                $("#restaurants").prepend(gifDiv);

     }});

    }