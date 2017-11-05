(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    //hours
    var checkTime = function () {
    var now = new Date();
    var timeDiv = document.getElementById('timeDiv');
    var messageDiv = document.getElementById('messageDiv');
    timeDiv.innerHTML = now.toString();

    var dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
    var hour = now.getHours(); // 0 = 12am, 1 = 1am, ... 18 = 6pm
    if (hours > 12) {
    hours -= 12;
} else if (hours === 0) {
   hours = 12;
};

    // check if it's a weekday between 9am and 5pm
    if (dayOfWeek > 0 && dayOfWeek < 6 && hour > 8 && hour < 18) {
        messageDiv.innerHTML = 'Yes, we\'re open!';
        messageDiv.className='open';
    }
    else {
        messageDiv.innerHTML = 'Sorry, we\'re closed!';
        messageDiv.className='closed';
    }
};

setInterval(checkTime, 1000);
checkTime();

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
