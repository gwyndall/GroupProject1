// Original code from https://codepen.io/timivey/pen/jEXxZY/


var gapikey = 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M';


// Search Box
$(function () {

    $('#search-form').submit(function (e) {
        e.preventDefault();
    });
});

function search() {
    // clear 
    $('#results').html('');
    // $('#buttons').html('');

    // get form input
    q = $('#query').val() + "trailer"; // this probably shouldn't be created as a global

    // run get request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: gapikey
        },
        function (data) {

            // Log data
            console.log(data);

            const item = data.items[0];

            // Get Output
            var output = getOutput(item);

            // display results
            $('#results').append(output);
        });
};

// Build output
function getOutput(item) {
    var videoID = item.id.videoId;
    var thumb = item.snippet.thumbnails.high.url;


    // Build output string

    var output = '<iframe width="420" height="345" src="https://youtube.com/embed/' + videoID + '?rel=0"></iframe>' +
        '<div class="clearfix"></div>' +
        '';
    return output;
}