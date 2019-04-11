$(document).ready(function () {
    //globla variables
    //to do : put them in an object
    let lat = 32.876709;
    let long = -117.206601;
    movieName = "";
    movieShowtimeUrl = "https://data.tmsapi.com/v1.1/movies/showings?startDate=";
    movieShowtimeAPIKey = "&api_key=qg7adr9qtevgagx4q4tbxbyk";
    queryURL = "";
    youtubeApi = "https://www.googleapis.com/youtube/v3/videos?key=[YOUR API KEY HERE]&fields=items(snippet(title,tags,channelTitle,publishedAt),statistics(viewCount))&part=snippet,statistics&id=[VIDEOID]"

    main();
    function main() {
        $("body").append($("<div>").addClass("container h-100").attr("id", "mainContainer"));
        buildMoviePage();
    }
    function buildMoviePage() {
        $("#mainContainer").append($("<div>").addClass("d-flex justify-content-center h-100").attr("id", "secondContainer"));
        $("#secondContainer").append($("<div>").addClass("searchbar").attr("id", "searchBarDiv"));
        $("#searchBarDiv").append($("<input>").addClass("search_input").attr({ type: "text", name: "", placeholder: "search a movie" }));
        $("#searchBarDiv").append($("<a>").addClass("search_icon").attr("id", "addStuff"));
        $("#addStuff").append($("<i>").addClass("fas fa-search"));
    }
    function destroyMoviePage() {
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
    function getLocation() {
        if (navigator.geolocation) {
            console.log("about to make a call to get zipcode dynamically");
            navigator.geolocation.getCurrentPosition(showPosition, showError);
            console.log("lattitude: " + lat + " Longitude : " + long);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
    }

    function showError(error) {
        switch (error.code) {
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
    function makeAPICall() {
        //need a url
        //make the call'
        //save it in something
        //function to create our URL for the api callß
        // createUrl(queryString);
        queryURL = createUrl();
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            displayMovieTimes(response);
        });
    }
    function createUrl() {
        return movieShowtimeUrl + todaysDate + "&lat=" + lat + "&lng=" + long + movieShowtimeAPIKey
        // http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-04-10&lat=32.876709&lng=-117.206601&api_key=stp9q5rsr8afbrsfmmzvzubz
    }

    function displayMovieTimes(response){

    }

    // function youtubeApiCall(){
    //     $.ajax({
    //         cache: false,
    //         data: $.extend({
    //             key: 'API_KEY',
    //             q: movieName,
    //             part: 'snippet'
    //         }, {maxResults:5}),
    //         dataType: 'json',
    //         type: 'GET',
    //         timeout: 5000,
    //         url: 'https://www.googleapis.com/youtube/v3/search'
    //     })
    //    .done(function(data) {
    //        $('.btn-group').show();
    //         if (typeof data.prevPageToken === "undefined") {
    //             $("#pageTokenPrev").hide();}else{$("#pageTokenPrev").show();
    //         }
    //         if (typeof data.nextPageToken === "undefined") {
    //             $("#pageTokenNext").hide();}else{$("#pageTokenNext").show();
    //         }
    //         var items = data.items, videoList = "";
    //         $("#pageTokenNext").val(data.nextPageToken);
    //         $("#pageTokenPrev").val(data.prevPageToken);
    //         $.each(items, function(index,e) {
    //             videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="'+e.snippet.title+'"><span class="title">'+e.snippet.title+'</span><span class="stat attribution">by <span>'+e.snippet.channelTitle+'</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="'+e.snippet.title+'" src="'+e.snippet.thumbnails.default.url+'" width="120" height="90"></span></a></div></li>';
    //         });
    //         $("#hyv-watch-related").html(videoList);
    //         // JSON Responce to display for user
    //         new PrettyJSON.view.Node({
    //             el:$(".hyv-watch-sidebar-body"), 
    //             data:data
    //         });
    //     });
    //    }

    function buildMovieTimesDisplayPage() {
        //build 1st row
        $("#mainContainer").append($("<section>").addClass("projects-section bg-light").attr("id", "projects"));
        $("#projects").append($("<container>").attr("id", "projectContainer"));
        $("#projectContainer").append($("<div>").addClass("row align-items-center no-gutters mb-4 mg-lg-5").attr("id", "row1"));
        $("#row1").append($("<div>").addClass("col-xl-8 col-lg-7").attr("id", "movieImage1"));
        $("#movieImage1").append($("<img>").addClass("img-fluid mb-3 mb-lg-0").attr("src", "./assets/Images/bg-masthead.jpg"));
        $("#row1").append($("<div>").addClass("col-xl-4 col-lg-5").attr("id", "movieText1"));
        $("#movieText1").append($("<div>").addClass("featured-text text-center text-lg-left").attr("id", "column2Div"));
        $("#column1Div").append($("<h4>").html("Theater Name"));
        $("#column1Div").append($("<p>").addClass("text-black-50 mb-0").html("This is where we can have all the different times for movie"));

        //build 2nd row
        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters mb-5 mb-lg-0").attr("id", "row2"));
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "movieImage2"));
        $("#movieImage2").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-01.jpg"));
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "movieText2"));
        $("#movieText2").append($("<div>").addClass("bg-black text-center h-100 project").attr("id", "column2Text1Div1"));
        $("#column2Text1Div1").append($("<div>").addClass("d-flex h-100").attr("id", "column2Text1Div2"));
        $("#column2Text1Div2").append($("<div>").addClass("project-text w-100 my-auto text-center text-lg-left").attr("id", "column2Text1Div3"))
        $("#column2Text1Div3").append($("<h4>").addClass("text-white").html("Name of the movie"));
        $("#column2Text1Div3").append($("<p>").addClass("mb-0 text-white-50").html("Here we will elaborate more on the plot of the movie or anything else you like to add"));
        // $("#column2Text1Div3").append($("<hr>").addClass("d-none d-lg-block mb-0 ml-0"));

    }
});
