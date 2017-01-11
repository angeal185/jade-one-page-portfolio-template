$(window).load(function(){
    "use strict";

    setTimeout(function(){

        $(".slideshow-home").addClass("animated-average slideInLeft");

    },800);

    setTimeout(function(){

        $("#loading").addClass("animated-middle slideOutRight");
        $("#fp-nav").addClass("animated-middle slideInLeft");
        $("#info").addClass("animated-middle slideInLeft");
        $(".intro").addClass("animated-middle fadeInLeft");

    },1000);

    setTimeout(function(){

        $("#loading").addClass("animated-middle slideOutRight");

    },1200);

    setTimeout(function(){
        
        $("#fp-nav").removeClass("animated-middle slideInLeft");
        $("#info").removeClass("animated-middle slideInLeft");

    },2410);

});

$(document).ready(function(){
    "use strict";

    var fooReveal = {
      delay    : 200,
      distance : '6rem',
      easing   : 'ease-in-out',
      mobile   : false
    };

    $('#fullpage').fullpage({
        anchors: ['Home-1', 'About-2', 'Portfolio-3', 'Contact-4'],
        navigation: true,
        navigationTooltips: ['Home', 'About', 'Portfolio', 'Contact'],
        responsiveWidth: 1025,
        scrollBar:true,

        afterRender: function(){
            window.sr = ScrollReveal();
            sr.reveal('.foo', fooReveal);
        },

    });

    if ($(window).width() < 1025) {
        $( "#info" ).insertAfter( "#section1" );
    }

     $(window).resize(function() {
        if ($(window).width() < 1025) {
            $( "#info" ).insertAfter( "#section1" );
        }
        else {
            $( "#info" ).insertAfter( "#fullpage" );
        }
    });

    $("#getting-started")
        .countdown("2016/12/24 15:30:30", function(event) {
            $(this).html(
                event.strftime('%D')
            );
    });

    $('#info, #subscribing')

        .on('mouseover', function(){
            $(".section").addClass("hover-off");
        })

        .on('mouseout', function(){
            $(".section").removeClass("hover-off");
        });

    $('.gallery-link')
        .each(function(){
        $(this)
        .append('<div class="photo"></div>')
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });

    $("#notifyMe").notifyMe();

    (function() {

        var dlgtrigger = document.querySelector( '[data-dialog]' ),
            somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
            dlg = new DialogFx( somedialog );
        dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

    })();
 
});