$(document).ready(function() {
    console.log( "ready!" );

    $("#loginBtn").on("click", function(event) {
        event.preventDefault();
        $("#loginModal").show();
    });

});