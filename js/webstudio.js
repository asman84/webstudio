$('#card1').click(function() {
    $('#card1').animate({
        width: '85%',
    }, 1000);
    $('#card2').animate({
        width: 'toggle',
        height: 'toggle',
        opacity: 0
    }, 1000);
    $('#card3').animate({
        width: 'toggle',
        height: 'toggle',
        opacity: 0
    }, 1000);

});
$('#card2').click(function() {
    $('#card2').animate({
        width: '85%',
    });
    $('#card1').toggle();
    $('#card3').toggle();
});

$('#card3').click(function() {
    $('#card3').animate({
        width: '85%',
    }, 1000);
    $('#card1').animate({
        width: 'toggle',
        height: 'toggle',
        opacity: 0
    }, 1000);
    $('#card2').animate({
        width: 'toggle',
        height: 'toggle',
        opacity: 0
    }, 1000);
});