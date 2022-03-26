$(document) .ready(function() {
    console.log('ready');

    $('#slide2').hide();
    $('#slide1').show();


    $('#mark1').click(function() {
        $('#slide2').hide();
        $('#slide1').show();
});
    $('#mark2').click(function() {
        $('#slide1').hide();
        $('#slide2').show();
    });
});