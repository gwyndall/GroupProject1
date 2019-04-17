$(document).ready(function () {
    //globla variables
    //to do : put them in an object
    let movieAndDinnerObject = {
        movieName: "",
        lat: 32.876709,
        long: -117.206601,
        movieShowtimeUrl: "https://data.tmsapi.com/v1.1/movies/showings?startDate=",
        movieShowtimeAPIKey: "&api_key=qg7adr9qtevgagx4q4tbxbyk",
        queryURL: "",
        foundMovie: null,
        theaters: null,
        youtubeApi: "https://www.googleapis.com/youtube/v3/search",
        youTubeAPIkey: "AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M"
    }

    let movieData = {
        movieName: "",
        theaters: []
    }

    function itExists(arr, element, arr2){
        returnVal = false
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].theaterName == element){
                arr[i].showTimes.push({time: moment(arr2.dateTime), fandangoLink: arr2.ticketURI});
                returnVal = true;
            }else{
                returnVal = false;
            }   
        }
        return returnVal;
    }

    function buildMovieData(movies) {
        let result = movies.find(movie => movie.title == movieAndDinnerObject.movieName);
        
        movieData.movieName = result.title;
        let showTimes = result.showtimes;
        console.log(showTimes);
        var theaters = [];

        showTimes.forEach(function (showTime) {
            if (!theaters[showTime.theatre.name]) {
                if(!itExists(theaters,showTime.theatre.name,showTime)){
                    newTheater = {theaterName: showTime.theatre.name, showTimes: []}
                    theaters.push(newTheater) //= { showTimes: [] }
                }else{
                    console.log("exists: " + showTime.theatre.name);
                }
            }
        })
        movieData.theaters = theaters;
        console.log(movieData);

    }


    main();
    function main() {
        $("body").append($("<div>").addClass("container h-100 scrollspy").attr("id", "mainContainer"));
        // buildNavbar();
        buildMoviePage();

    }
    function buildMoviePage() {
        $("#mainContainer").append($("<div>").addClass("d-flex justify-content-center h-100").attr("id", "secondContainer"));
        $("#secondContainer").append($("<div>").addClass("searchbar").attr("id", "searchBarDiv"));
        $("#searchBarDiv").append($("<input>").addClass("search_input").attr({ type: "text", name: "", placeholder: "search a movie", id: "user-movie-search" }));
        $("#searchBarDiv").append($("<a>").addClass("search_icon").attr("id", "addStuff"));
        $("#addStuff").append($("<i>").addClass("fas fa-search"));
    }
    function destroyMoviePage() {
        $("#mainContainer").empty();
    }
    $(document).on("click", "#addStuff", function () {
        event.preventDefault();
        movieAndDinnerObject.movieName = $("#user-movie-search").val().trim();
        console.log("inside the click");
        destroyMoviePage();
        buildMovieTimesDisplayPage();
        getLocation();
        //makeAPICall();
        buildMovieData(responseObject.responseResult);
        createTheaers();
        youTubeSearch(movieAndDinnerObject.movieName + "trailer");
        imageSearch(movieAndDinnerObject.movieName);
    });
    //location stuff
    function getLocation() {
        if (navigator.geolocation) {
            console.log("about to make a call to get zipcode dynamically");
            navigator.geolocation.getCurrentPosition(showPosition, showError);
            console.log("lattitude: " + movieAndDinnerObject.lat + " Longitude : " + movieAndDinnerObject.long);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        movieAndDinnerObject.lat = position.coords.latitude;
        movieAndDinnerObject.long = position.coords.longitude;
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
        //need a url -- done
        //make the call -- done
        //save it in something 
        //function to create our URL for the api callß
        // createUrl(queryString);
        movieAndDinnerObject.queryURL = createUrl();
        $.ajax({
            url: movieAndDinnerObject.queryURL,
            method: "GET"
        }).then(function (response) {
            buildMovieData(response);
        });
    }
    function createUrl() {
        todaysDate = moment().format("YYYY-MM-DD");
        return movieAndDinnerObject.movieShowtimeUrl + todaysDate + "&lat=" + movieAndDinnerObject.lat + "&lng=" + movieAndDinnerObject.long + movieAndDinnerObject.movieShowtimeAPIKey
        // http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-04-10&lat=32.876709&lng=-117.206601&api_key=stp9q5rsr8afbrsfmmzvzubz
    }

    function createTheaers(){
        console.log("the time: "+ moment(movieData.theaters[0].showTimes[0].time).format("hh:mm a"));
        console.log(movieData.theaters[0].theaterName);
        
        $("#theaterBlock1").append($("<h4>").html(movieData.theaters[0].theaterName));
        $("#theaterBlock1").append(createTable(movieData.theaters[0].showTimes));
        // createTable(movieData.theaters[0].showTimes);

        $("#theaterBlock2").append($("<h4>").addClass("text-white").html(movieData.theaters[1].theaterName));
        $("#theaterBlock2").append(createTable(movieData.theaters[1].showTimes).addClass("text-white"));

        $("#theaterBlock3").append($("<h4>").addClass("text-white").html(movieData.theaters[2].theaterName));
        $("#theaterBlock3").append(createTable(movieData.theaters[2].showTimes).addClass("text-white"));

    }

    function youTubeSearch(queryValue){
        $.get(
            movieAndDinnerObject.youtubeApi,{
                part: "snippet, id",
                q: queryValue,
                type: "video",
                key: movieAndDinnerObject.youTubeAPIkey
            },
            function(data){
                // Log data
            console.log(data);

            const item = data.items[0];

            // Get Output
            var output = getVideoLink(item);
            $("#youtube-trailer").append(output);
            }
        )
    }

    function imageSearch(queryValue) {
        // run get request on API
        $.get(
            "https://www.googleapis.com/customsearch/v1", {
                // part: 'snippet, id',
                q: queryValue,
                cx: "007612904269435061873:ms7wk6lvmbu",
                searchType: "image",
                imgSize: "large",
                key: "AIzaSyBqHjcGWJ84tqj-6-7mY_J_nH1jpBje9qQ"
            },
            function (data) {
    
                // Log data
                console.log(data);
    
                const imageLink = data.items[0].link;
                $("#movieImage2").append($("<img>").addClass("img-fluid").attr("src", data.items[0].link));
                $("#movieImage3").append($("<img>").addClass("img-fluid").attr("src", data.items[2].link));

            });
    
    
    };

    function getVideoLink(item){
        var videoID = item.id.videoId;
        var thumb = item.snippet.thumbnails.high.url;
        //build output string
        var output = '<iframe auto src="https://youtube.com/embed/' + videoID + '?rel=0"></iframe>' + '<div class="clearfix"></div>' + '';
        return output;
    }

    function getImageLink(item){
        var imageId = item.link;

    }

    function createTable(arr){
        var newTable = $("<table>");
        newTable.addClass("table striped center bordered responsive-table").attr("id", "theaterInfo")
        for (let i = 0; i < arr.length; i++) {
            console.log("i = "+i);
            if(i%2 === 0){
                var newTR = $("<tr>").attr("id", "tr"+i);
            }
                var newBtn = createEachButton(arr[i], i);
                newTR.append($("<th>").attr("id","tr-"+i).append(newBtn));
                newTable.append(newTR);
        }
        // $("#theaterBlock1").append(newTable);
        return newTable;
    }

    function createEachButton(element, index){
        var showtimeBtn = $("<button>");
        
        // showtimeBtn.attr("id", "time"+index).attr("href", element.fandangoLink).addClass("movieTimeButton");
        showtimeBtn.attr("id", "time"+index).addClass("movieTimeButton btn-sm");
        showtimeBtn.html(moment(element.time).format("hh:mm a")).append($("<a>").html(" T").attr("href", element.fandangoLink));
        return showtimeBtn;
    }

    function buildNavbar(){
        $("#mainContainer").append($("<div>").addClass("navbar-fixed").attr("id", "nav-bar"));
        $("#nav-bar").append($("<div>").addClass("cinnabar").attr("id", "cinna-bar"));
        $("#cinna-bar").append($("<div>").addClass("container").attr("id", "nav-container"));
        $("#nav-container").append($("<div>").addClass("nav-wrapper").attr("id", "navWrapper"));
        $("#navWrapper").append($("<a>").addClass("brand-logo").attr("href", "#").html("Movie and Dinner Night"));
        $("#navWrapper").append($("<a>").addClass("sidenav-trigger").attr("href", "#").attr("id", "side-nav-trigger"));
        $("#side-nav-trigger").append($("<i>").addClass("material-icons").html("menu"));

    }

    function buildMovieTimesDisplayPage() {
        //build 1st row
        $("#mainContainer").append($("<section>").addClass("projects-section bg-light").attr("id", "projects"));
        $("#projects").append($("<container>").attr("id", "projectContainer"));
        $("#projectContainer").append($("<div>").addClass("row align-items-center no-gutters mb-4 mg-lg-5").attr("id", "row1"));
        $("#row1").append($("<div>").addClass("col-xl-8 col-lg-7").attr("id", "movieImage1"));
        // $("#movieImage1").append($("<img>").addClass("img-fluid mb-3 mb-lg-0").attr("src", "./assets/Images/bg-masthead.jpg"));
        $("#movieImage1").append($("<div>").addClass("embed-responsive embed-responsive-16by9").attr("id", "youtube-div"));
        $("#youtube-div").append($("<ul>").attr("id", "youtube-trailer"));
        $("#row1").append($("<div>").addClass("col-xl-4 col-lg-5").attr("id", "movieText1"));
        $("#movieText1").append($("<div>").addClass("featured-text text-center").attr("id", "theaterBlock1"));
        // $("#theaterBlock1").append($("<h4>").html("Theater Name"));
        // $("#movieText1").append($("<p>").addClass("text-black-50 mb-0").html("This is where we can have all the different times for movie"));

        //build 2nd row
        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters").attr("id", "row2"))
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "movieImage2"));
        // $("#movieImage2").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-01.jpg"));
        $("#row2").append($("<div>").addClass("col-lg-6 bg-black text-center").attr("id", "movieText2"));
        $("#movieText2").append($("<div>").addClass("project-text w-100 my-auto text-center mb-0 text-white-50 theaterBlock").attr("id", "theaterBlock2"))
        // $("#theaterBlock2").append($("<h4>").addClass("text-white").html("Name of the movie"));
        // $("#theaterBlock2").append($("<p>").addClass("mb-0 text-white-50").html("Here we will elaborate more on the plot of the movie or anything else you like to add"));
        $("#theaterBlock2").append($("<hr>").addClass("d-none d-lg-block mb-0 ml-0"));

        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters").attr("id", "row3"));
        $("#row3").append($("<div>").addClass("col-lg-6").attr("id", "movieImage3"));
        // $("#movieImage3").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-02.jpg"));
        $("#row3").append($("<div>").addClass("col-lg-6 order-lg-first bg-black text-center").attr("id", "movieText3"));
        $("#movieText3").append($("<div>").addClass("project-text w-100 my-auto text-center text-lg-left").attr("id", "theaterBlock3"));
        // $("#theaterBlock3").append($("<h4>").addClass("text-white").html("Name of the Movie"));
        // $("#theaterBlock3").append($("<p>").addClass("mb-0 text-white-50").html("we will add some cast info or something here"));
        $("#theaterBlock3").append($("<hr>").addClass("d-none d-lg-block mb-0 mr-0"))
    }

    // todo: ---------------DELETE --------------------
    ///adding the response object for now so we dont have to call the object
    const responseObject = {
        responseResult: [
            {
                "tmsId": "MV010777880000",
                "rootId": "15054143",
                "subType": "Feature Film",
                "title": "Shazam!",
                "releaseYear": 2019,
                "releaseDate": "2019-04-05",
                "titleLang": "en",
                "descriptionLang": "en",
                "entityType": "Movie",
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy"
                ],
                "longDescription": "We all have a superhero inside of us -- it just takes a bit of magic to bring it out. In 14-year-old Billy Batson's case, all he needs to do is shout out one word to transform into the adult superhero Shazam. Still a kid at heart, Shazam revels in the new version of himself by doing what any other teen would do -- have fun while testing out his newfound powers. But he'll need to master them quickly before the evil Dr. Thaddeus Sivana can get his hands on Shazam's magical abilities.",
                "shortDescription": "A 14-year-old transforms into the adult superhero Shazam and battles the evil Dr. Thaddeus Sivana.",
                "topCast": [
                    "Zachary Levi",
                    "Mark Strong",
                    "Asher Angel"
                ],
                "directors": [
                    "David F. Sandberg"
                ],
                "officialUrl": "http://www.shazammovie.com/",
                "ratings": [
                    {
                        "body": "Motion Picture Association of America",
                        "code": "PG-13"
                    }
                ],
                "advisories": [
                    "Adult Language",
                    "Adult Situations"
                ],
                "runTime": "PT02H12M",
                "preferredImage": {
                    "width": "240",
                    "height": "360",
                    "caption": {
                        "content": "Shazam! (2019)",
                        "lang": "en"
                    },
                    "uri": "assets/p15054143_p_v5_af.jpg",
                    "category": "Poster Art",
                    "text": "yes",
                    "primary": "true"
                },
                "showtimes": [
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T10:45",
                        "quals": "Closed Captioned|Descriptive Audio Services|Mega Screen",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T11:25",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T12:15",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T13:30",
                        "quals": "Mega Screen|Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T14:20",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T16:20",
                        "quals": "Mega Screen|Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T17:05",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T17:55",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T19:00",
                        "quals": "Mega Screen|Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T20:15",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T21:15",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T21:45",
                        "quals": "Mega Screen|Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T22:30",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T11:30",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T12:00",
                        "quals": "Descriptive Video Services|Recliners|Reserved Seating|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T15:00",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T18:15",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T21:30",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T10:15",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T11:05",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T12:30",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T14:00",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T15:30",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T16:05",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T16:55",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T18:30",
                        "quals": "Descriptive Audio Services|Open-Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T19:00",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T19:55",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T21:25",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T21:55",
                        "quals": "Closed Captioned|Descriptive Audio Services|35mm",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=182201&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T11:00",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T13:30",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T17:15",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T19:30",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T21:15",
                        "barg": false
                    }
                ]
            },
            {
                "tmsId": "MV011861920000",
                "rootId": "15849524",
                "subType": "Feature Film",
                "title": "The Mustang",
                "releaseYear": 2019,
                "releaseDate": "2019-01-31",
                "titleLang": "en",
                "descriptionLang": "en",
                "entityType": "Movie",
                "genres": [
                    "Drama"
                ],
                "longDescription": "A violent convict is given the chance to participate in a rehabilitation therapy program centered around the training of wild mustangs.",
                "shortDescription": "A convict is given the chance to participate in a program involving the training of wild mustangs.",
                "topCast": [
                    "Matthias Schoenaerts",
                    "Gideon Adlon",
                    "Bruce Dern"
                ],
                "directors": [
                    "Laure de Clermont-Tonnerre"
                ],
                "qualityRating": {
                    "ratingsBody": "TMS",
                    "value": "3.5"
                },
                "ratings": [
                    {
                        "body": "Motion Picture Association of America",
                        "code": "R"
                    }
                ],
                "advisories": [
                    "Adult Language",
                    "Adult Situations",
                    "Violence"
                ],
                "runTime": "PT01H36M",
                "preferredImage": {
                    "width": "240",
                    "height": "360",
                    "uri": "assets/p15849524_v_v5_aa.jpg",
                    "category": "VOD Art",
                    "text": "yes",
                    "primary": "true"
                },
                "showtimes": [
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T10:50",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T13:20",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T14:00",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T15:00",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T17:15",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T20:10",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T22:00",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=192638&d=2019-04-10"
                    }
                ]
            },
            {
                "tmsId": "MV011931130000",
                "rootId": "15955710",
                "subType": "Feature Film",
                "title": "Us",
                "releaseYear": 2019,
                "releaseDate": "2019-03-08",
                "titleLang": "en",
                "descriptionLang": "en",
                "entityType": "Movie",
                "genres": [
                    "Horror",
                    "Thriller"
                ],
                "longDescription": "Accompanied by her husband, son and daughter, Adelaide Wilson returns to the beachfront home where she grew up as a child. Haunted by a traumatic experience from the past, Adelaide grows increasingly concerned that something bad is going to happen. Her worst fears soon become a reality when four masked strangers descend upon the house, forcing the Wilsons into a fight for survival. When the masks come off, the family is horrified to learn that each attacker takes the appearance of one of them.",
                "shortDescription": "A couple and their two children fight for survival against four strangers who look just like them.",
                "topCast": [
                    "Lupita Nyong'o",
                    "Winston Duke",
                    "Elisabeth Moss"
                ],
                "directors": [
                    "Jordan Peele"
                ],
                "ratings": [
                    {
                        "body": "Motion Picture Association of America",
                        "code": "R"
                    }
                ],
                "advisories": [
                    "Adult Language",
                    "Adult Situations",
                    "Violence"
                ],
                "runTime": "PT01H56M",
                "preferredImage": {
                    "width": "240",
                    "height": "360",
                    "uri": "assets/p15955710_v_v5_aa.jpg",
                    "category": "VOD Art",
                    "text": "yes",
                    "primary": "true"
                },
                "showtimes": [
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T10:55",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T12:35",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T15:05",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T17:40",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T18:55",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T20:05",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "10654",
                            "name": "ArcLight La Jolla"
                        },
                        "dateTime": "2019-04-10T22:10",
                        "quals": "Descriptive Audio Services|Closed Captioned",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAWTZ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T13:20",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T16:20",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T19:10",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "6855",
                            "name": "AMC La Jolla 12"
                        },
                        "dateTime": "2019-04-10T21:55",
                        "quals": "Closed Captioned|Descriptive Video Services|Recliners|Reserved Seating",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AABAM&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T10:50",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T13:45",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T16:25",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T19:30",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "5828",
                            "name": "Town Square 14"
                        },
                        "dateTime": "2019-04-10T22:15",
                        "quals": "Closed Captioned|Descriptive Audio Services",
                        "barg": false,
                        "ticketURI": "http://www.fandango.com/tms.asp?t=AAAWJ&m=189732&d=2019-04-10"
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T11:30",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T14:15",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T18:00",
                        "barg": false
                    },
                    {
                        "theatre": {
                            "id": "11225",
                            "name": "THE LOT La Jolla"
                        },
                        "dateTime": "2019-04-10T19:45",
                        "barg": false
                    }
                ]
            },

        ]
    }

});
