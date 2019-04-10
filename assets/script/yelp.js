$.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// IDEA: Use cors-anywhere with jQuery (yep)
// DOCUMENTATION: http://api.jquery.com/jquery.ajaxprefilter/
// MORE DOCUMENTATION: https://github.com/Rob--W/cors-anywhere/#documentation

