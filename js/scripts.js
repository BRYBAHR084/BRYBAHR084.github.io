$(document).ready(function () {

    $('.video-background').click(function() {
        $('.video').YTPPlay();
        setTimeout(function() {
            $('.video-background').fadeOut(300);
        }, 200);
    });

    $(".video").YTPlayer();

    $(".video").on('YTPEnd', function() {
        $('.video-background').fadeIn(300);
    });

    $(".nav-list__link").on("click", function (e) {
        e.preventDefault();

        var href = $(this).attr("href"),
            coordsTop = $(href).offset().top;

        $("body, html").animate({scrollTop: coordsTop}, 1100);

    });

    if($(window).width() > 767) {
        $(".phone").addClass("animate");
        setTimeout(function () {
          $(".main-banner-text").addClass("animate");
        }, 1400);
    }

    $('.modal-block').height($(window).outerHeight());

    $('.modal-button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.white-filter').addClass('active');
        $('.modal-block').addClass('active');
        $('body').css({'overflow-y': 'hidden'});
    });

    $('.close-but').click(function(e){
        $('.white-filter').removeClass('active');
        $('.modal-block').removeClass('active');
        $('body').css({'overflow-y': 'auto'});
    });

    $("#form").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: form_data,
            success: function() {
                $('.success').addClass('active')
                $('.close-but').click();
                $('input,textarea').val('');
            }});
    });

    $('.close-but').click(function(e){
        $('.white-filter').removeClass('active');
        $('.modal-block').removeClass('active');
        setTimeout(function () {
            $('.success').removeClass('active');
        },2000);
    });


});