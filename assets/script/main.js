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
        youtubeApi: "https://www.googleapis.com/youtube/v3/videos?key=[YOUR API KEY HERE]&fields=items(snippet(title,tags,channelTitle,publishedAt),statistics(viewCount))&part=snippet,statistics&id=[VIDEOID]"
    }

    let movieData = {
        movieName: "",
        theaters: [{
            theaterName: "",
            showTimes: [{
                time: "",
                fandangoLink: ""
            }]
        }]
    }

    function itExists(arr, element, arr2){
        returnVal = false
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].theaterName == element){
                arr[i].showTimes.push(moment(arr2.dateTime));
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
                    newTheater = {theaterName: showTime.theatre.name, showTimes: [], fandangoLink: []}
                    theaters.push(newTheater) //= { showTimes: [] }
                }else{

                    console.log("exists: " + showTime.theatre.name);
                }
            }
        })

        // if (myArray.indexOf(searchTerm) === -1) {
        //     console.log("element doesn't exist");
        //   }
        //   else {
        //     console.log("element found");
        //   }

        // showTimes.forEach(function (showTime) {
        //     if (!theaters[showTime.theatre.name]) {
        //         theaters[showTime.theatre.name] = { showTimes: [] }
        //     } else {
        //         // console.log(theaters)
        //         // theaters[showtime.theatre.name].showtimes.push(showtime) 
        //     }
        // })
        console.log(theaters);

        // for (let i = 0; i < showTimes.length; i++) {
            
            
        // }

        for (let i = 0; i < showTimes.length; i++) {
            
            

            // for (let j = 0; j < theaters.length; j++) {
            //     console.log("theaters: " + theaters[j]);
            //     if(showTimes[i].theatre.name === theaters[j]){
            //         theaters[j].showTimes.push(showTkmes[i].dateTime);
            //     }
                
            // }
            
        }
        
        // console.log("before the loop" + theaters);
        // for (let i = 0; i < showTimeArray.length; i++) {
        //     let theaterName = showTimeArray[i].theatre.name;
        //     let theaterShowTime = showTimeArray[i].dateTime;
        //     let theaterShowtimeArray = [];

        //     console.log("the showtime: "+theaterShowTime);
        //     for (let j = 0; j < theaters.length; j++) {
        //         if(!theaters[j].theaterName === theaterName){
        //             newTheaterName = theaterName;
        //             newTheaterShowTime = theaterShowTime;
        //         }else{
        //             newTheaterShowTime = theaterShowTime;
        //         }
        //         theaterShowtimeArray.push(newTheaterShowTime);
        //         var temptheater = {
        //             theaterName : newTheaterName,
        //             showtimes: newTheaterName
        //         }
        //     }

        // }
        // showTimeArray.forEach(function(showTime){
        //     let theaterName = showTime.theatre.name;

        //     if(typeof theaters[showTime] === 'undefined'){
        //         console.log ("inside if");
        //         theaters[showTime] = [];
        //     }
        //     theaters[showTime].push(showTime.theatre.name);
        //     console.log(theaters);
        // })



        // showTimeArray.forEach(function(showtime) {
        //     showTimeArray.forEach(function(showtime){
        //         if(typeof theaters[showtime.name] === "undefined"){
        //             theaters[showtime.name] = [];
        //         }
        //         theaters[showtime.name].push(showtime);
        //     })

        // showTimes.forEach(function(showTime) {
        //     if(typeof showTimesByTheater[showTime.name] === 'undefined') {
        //         showTimesByTheater[showTime.name] = [];
        //     }

        //     showTimesByTheater[showTime.name].push(showTime);
        // });





        // let result = movies.find(movie => movie.title == movieAndDinnerObject.movieName);
        
    }

    // var objArray = [
    //     { id: 0, name: 'Object 0', otherProp: '321' },
    //     { id: 1, name: 'O1', otherProp: '648' },
    //     { id: 2, name: 'Another Object', otherProp: '850' },
    //     { id: 3, name: 'Almost There', otherProp: '046' },
    //     { id: 4, name: 'Last Obj', otherProp: '984' }
    // ];

    // let obj = objArray.find(obj => obj.id == 3);

    // movies = objArray
    // result = obj
    // moviename = obj.id 

    // console.log(inventory.find(isCherries)); 
    // { name: 'cherries', quantity: 5 }
    // { name: 'cherries', quantity: 5 }

    // function extractInformation(response){
    //     response.foreach(function(movieInformations){


    //         if(typeof response.responseResult.title === "undefined"){
    //             showTimesByTheater[showtime.name]
    //         }
    //     });

    //     // showTimes.forEach(function(showTime) {
    //     //     if(typeof showTimesByTheater[showTime.name] === 'undefined') {
    //     //         showTimesByTheater[showTime.name] = [];
    //     //     }

    //     //     showTimesByTheater[showTime.name].push(showTime);
    //     // });
    // }


    main();
    function main() {
        $("body").append($("<div>").addClass("container h-100").attr("id", "mainContainer"));
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
            displayMovieTimes(response);
        });
    }
    function createUrl() {
        todaysDate = moment().format("YYYY-MM-DD");
        return movieAndDinnerObject.movieShowtimeUrl + todaysDate + "&lat=" + movieAndDinnerObject.lat + "&lng=" + movieAndDinnerObject.long + movieAndDinnerObject.movieShowtimeAPIKey
        // http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-04-10&lat=32.876709&lng=-117.206601&api_key=stp9q5rsr8afbrsfmmzvzubz
    }


    // let json = require("./AllMovieshowtimeResponse.json");
    // displayMovieTimes(json);






    // function createTheaers(){
    //     array = movieAndDinnerObject.foundMovie;
    //     array.showtime[0].theater.name;
    //     //for loop for theaters
    //     for (let i = 0; i < array.length; i++) {
    //         if(i<6 ){
    //             let newTheather = $("<h4>").addClass("btn-primary").attr("id", "theater"+i);
    //             theatherArray = array.showtime[i].theater
    //             for (let j = 0; j < array.length; j++) {
    //                 const element = array[j];

    //             }

    //             //populate theaters
    //         }else {
    //             break;
    //         }

    //     }

    // }
    // for (var i = 0; i < letters.length; i++) {

    //     // Inside the loop...

    //     // 2. Create a variable named "letterBtn" equal to $("<button>");
    //     var letterBtn = $("<button>");

    //     // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    //     letterBtn.addClass("letter-button letter letter-button-color");

    //     // 4. Then give each "letterBtn" a data-attribute called "data-letter".
    //     letterBtn.attr("data-letter", letters[i]);

    //     // 5. Then give each "letterBtns" a text equal to "letters[i]".
    //     letterBtn.text(letters[i]);

    //     // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    //     $("#buttons").append(letterBtn);

    //   }


    //     <table>
    //     <tr>
    //       <td>Alfreds Futterkiste</td>
    //       <td>Maria Anders</td>
    //     </tr>
    //     <tr>
    //       <td>Centro comercial Moctezuma</td>
    //       <td>Francisco Chang</td>
    //     </tr>
    //     <tr>
    //       <td>Ernst Handel</td>
    //       <td>Roland Mendel</td>
    //     </tr>
    //     <tr>
    //       <td>Island Trading</td>
    //       <td>Helen Bennett</td>
    //     </tr>
    //     <tr>
    //       <td>Laughing Bacchus Winecellars</td>
    //       <td>Yoshi Tannamuri</td>
    //     </tr>
    //     <tr>
    //       <td>Magazzini Alimentari Riuniti</td>
    //       <td>Giovanni Rovelli</td>
    //     </tr>
    //   </table>


    function buildMovieTimesDisplayPage() {
        //build 1st row
        $("#mainContainer").append($("<section>").addClass("projects-section bg-light").attr("id", "projects"));
        $("#projects").append($("<container>").attr("id", "projectContainer"));
        $("#projectContainer").append($("<div>").addClass("row align-items-center no-gutters mb-4 mg-lg-5").attr("id", "row1"));
        $("#row1").append($("<div>").addClass("col-xl-8 col-lg-7").attr("id", "movieImage1"));
        $("#movieImage1").append($("<img>").addClass("img-fluid mb-3 mb-lg-0").attr("src", "./assets/Images/bg-masthead.jpg"));
        $("#row1").append($("<div>").addClass("col-xl-4 col-lg-5").attr("id", "movieText1"));
        $("#movieText1").append($("<div>").addClass("featured-text text-center text-lg-left").attr("id", "column2Div"));
        $("#movieText1").append($("<h4>").html("Theater Name"));
        $("#movieText1").append($("<p>").addClass("text-black-50 mb-0").html("This is where we can have all the different times for movie"));

        //build 2nd row
        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters").attr("id", "row2"))
        $("#row2").append($("<div>").addClass("col-lg-6").attr("id", "movieImage2"));
        $("#movieImage2").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-01.jpg"));
        $("#row2").append($("<div>").addClass("col-lg-6 bg-black text-center").attr("id", "movieText2"));
        $("#movieText2").append($("<div>").addClass("project-text w-100 my-auto text-center text-lg-left").attr("id", "column2Text1Div3"))
        $("#column2Text1Div3").append($("<h4>").addClass("text-white").html("Name of the movie"));
        $("#column2Text1Div3").append($("<p>").addClass("mb-0 text-white-50").html("Here we will elaborate more on the plot of the movie or anything else you like to add"));
        $("#column2Text1Div3").append($("<hr>").addClass("d-none d-lg-block mb-0 ml-0"));

        $("#projectContainer").append($("<div>").addClass("row justify-content-center no-gutters").attr("id", "row3"));
        $("#row3").append($("<div>").addClass("col-lg-6").attr("id", "movieImage3"));
        $("#movieImage3").append($("<img>").addClass("img-fluid").attr("src", "./assets/Images/demo-image-02.jpg"));
        $("#row3").append($("<div>").addClass("col-lg-6 order-lg-first bg-black text-center").attr("id", "movieText3"));
        $("#movieText3").append($("<div>").addClass("project-text w-100 my-auto text-center text-lg-left").attr("id", "column3Text1Div3"));
        $("#column3Text1Div3").append($("<h4>").addClass("text-white").html("Name of the Movie"));
        $("#column3Text1Div3").append($("<p>").addClass("mb-0 text-white-50").html("we will add some cast info or something here"));
        $("#column3Text1Div3").append($("<hr>").addClass("d-none d-lg-block mb-0 mr-0"))
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
