$(document).ready(function () {
    //globla variables
    //to do : put them in an object
    let lat = 32.876709;
    let long = -117.206601;
    movieShowtimeUrl = "https://data.tmsapi.com/v1.1/movies/showings?startDate=",
    movieShowtimeAPIKey= "&api_key=qg7adr9qtevgagx4q4tbxbyk",

    main();
    function main(){
        $("body").append($("<div>").addClass("container h-100").attr("id", "mainContainer"));
        buildMoviePage();
    }
    function buildMoviePage(){
        $("#mainContainer").append($("<div>").addClass("d-flex justify-content-center h-100").attr("id","secondContainer"));
        $("#secondContainer").append($("<div>").addClass("searchbar").attr("id","searchBarDiv"));
        $("#searchBarDiv").append($("<input>").addClass("search_input").attr({type: "text", name:"", placeholder: "search a movie"}));
        $("#searchBarDiv").append($("<a>").addClass("search_icon").attr("id","addStuff"));
        $("#addStuff").append($("<i>").addClass("fas fa-search"));
    }
    function destroyMoviePage(){
        $("#mainContainer").empty();
    }
    $(document).on("click", "#addStuff", function () {
        event.preventDefault();
        console.log("inside the click");
        destroyMoviePage();
        buildMovieTimesDisplayPage();
        getLocation();
    });
    //location stuff
    function getLocation(){
        if (navigator.geolocation) {
          console.log("about to make a call to get zipcode dynamically");
          navigator.geolocation.getCurrentPosition(showPosition,showError);
          console.log("lattitude: " + lat + " Longitude : "+ long);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
      function showPosition(position){
          lat = position.coords.latitude;
          long = position.coords.longitude;
      }

      function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
        }
      }
      //build the url for api call
      function makeAPICall(){
          //need a url
          //make the call'
          //save it in something
           //function to create our URL for the api call

    function createUrl(queryString) {
        return movieShowtimeUrl + todaysDate + "&lat=" + lat + "&lng=" +  movieShowtimeAPIKey
        // http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-04-10&lat=32.876709&lng=-117.206601&api_key=stp9q5rsr8afbrsfmmzvzubz
    }
    //function to call the API
    function makeAPICall() {
        // createUrl(queryString);
        $.ajax({
            url: gifData.giphyUrl,
            method: "GET"
        }).then(function (response) {
            displayGiphys(response);
        });
    }
    // this is where we display all the Gifs
      }
    function buildMovieTimesDisplayPage(){
        //build 1st row
        $("#mainContainer").append($("<section>").addClass("projects-section bg-light").attr("id", "projects"));
        $("#projects").append($("<container>").attr("id","projectContainer"));
        $("#projectContainer").append($("<div>").addClass("row align-items-center no-gutters mb-4 mg-lg-5").attr("id", "row1"));
        $("#row1").append($("<div>").addClass("col-xl-8 col-lg-7").attr("id", "column1Image1"));
        $("#column1Image1").append($("<img>").addClass("img-fluid mb-3 mb-lg-0").attr("src", "./assets/Images/bg-masthead.jpg"));
        $("#row1").append($("<div>").addClass("col-xl-4 col-lg-5").attr("id", "column1Text1"));
        $("#column1text1").append($("<div>").addClass("featured-text text-center text-lg-left").attr("id", "column2Div"));
        $("#column1Div").append($("<h4>").html("Theater Name"));
        $("#column1Div").append($("<p>").addClass("text-black-50 mb-0").html("This is where we can have all the different times for movie"));

        //build 2nd row
        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters mb-5 mb-lg-0").attr("row2"));
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "column1Image2"));
        $("#column1Image2").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-01.jpg"));
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "column2Text1"));
        $("#column2Text1").append($("<div>").addClass("bg-black text-center h-100 project").attr("id", "column2Text1Div1"));
        $("#column2Text1Div1").append($("<div>").addClass("d-flex h-100").attr("id", "column2Text1Div2"));
        $("#column2Text1Div2").append($("<div>").addClass("project-text w-100 my-auto text-center text-lg-left").attr("id", "column2Text1Div3"))
        $("#column2Text1Div3").append($("<h4>").addClass("text-white").html("Name of the movie"));
        $("#column2Text1Div3").append($("<p>").addClass("mb-0 text-white-50").html("Here we will elaborate more on the plot of the movie or anything else you like to add"))

    }
});
