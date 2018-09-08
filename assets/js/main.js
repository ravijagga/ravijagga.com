$(document).ready(function() {

    /*========== Begin Particles.js Configuration ==========*/
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
    /*========== End Particles.js Configuration ==========*/


    /*========== Begin Smooth Scroll ==========*/

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*========== End Smooth Scroll ==========*/


    /*========== Begin Typed.js Configuration ==========*/
    var typed = new Typed('.typed', {
        strings: ["Hi, I'm <span>Ravi Jagga</span>. I'm a <span>Javascript Developer</span>."],
        typeSpeed: 50
    });
    /*========== End Typed.js Configuration ==========*/


    /*========== Begin Animate on Scroll ==========*/

    // Define Functions
    function animateCSS(element, animation) {
        $(element).addClass('animated ' + animation);
    }

    function animateCSSEach(element, animation) {
        $(element).each(function(i) {
            setTimeout(function() {
                $(element).eq(i).addClass('animated ' + animation);
            }, i * 100);
        });
    }


    // Animate My Avatar
    animateCSS('.round-img', 'bounceInDown');
   

    // On Scroll
    $(window).scroll(function(event) {

        var vScroll = $(this).scrollTop();
        var animationStartPos = $(window).height() / 1.2;

        // Animate Skill Section
        if (vScroll > $('.skill-section').offset().top - animationStartPos) {
            animateCSSEach('.c100', 'fadeInDown');
        }


        // Animate Project Section
        $('.single-project').each(function(i){
            if (vScroll > ($(this).offset().top - animationStartPos)) {
                $(this).addClass('animated ' + 'fadeIn');
            }
        });

        
        // Animate Qualification Section
        var qualificationOffset = Math.abs(Math.min(0, vScroll -  $('.qualification-section').offset().top + ($(window).height()/2.5) - 200)) / 2;
        if (vScroll > $('.qualification-section').offset().top - animationStartPos) {

            $('.qualification-col:nth-of-type(1)').css({
                transform: 'translate(-' + qualificationOffset + 'px, ' + qualificationOffset + 'px)',
                visibility: 'visible'
            });
            $('.qualification-col:nth-of-type(2)').css({
                transform: 'translate(0, ' + qualificationOffset * 2 + 'px)',
                visibility: 'visible'
            });
            $('.qualification-col:nth-of-type(3)').css({
                transform: 'translate(' + qualificationOffset + 'px, ' + qualificationOffset + 'px)',
                visibility: 'visible'
            });
        }


        // Animate Hobby Section
        var hobbyOffset = Math.abs(Math.min(0, vScroll -  $('.hobby-section').offset().top + ($(window).height()/2.5) - 200)) / 2;
        if (vScroll > $('.hobby-section').offset().top - animationStartPos) {
            // console.log($('.qualification-col:nth-of-type(2)'));
            $('.hobby-col:nth-of-type(1)').css({
                transform: 'translate(-' + hobbyOffset + 'px, ' + hobbyOffset + 'px)',
                visibility: 'visible'
            });
            $('.hobby-col:nth-of-type(2)').css({
                transform: 'translate(0, ' + hobbyOffset * 2 + 'px)',
                visibility: 'visible'
            });
            $('.hobby-col:nth-of-type(3)').css({
                transform: 'translate(' + hobbyOffset + 'px, ' + hobbyOffset + 'px)',
                visibility: 'visible'
            });
        }


        // Animate Contact Section
        if (vScroll > $('.qr-code').offset().top - animationStartPos) {
            animateCSS('.qr-code', 'fadeInLeft');
        }
        if (vScroll > $('.contact-details').offset().top - animationStartPos) {
            animateCSS('.contact-details', 'fadeInRight');
        }
        if (vScroll > $('.send-email').offset().top - animationStartPos - 100) {
            animateCSS('.send-email', 'rubberBand');
        }

    });
    /*========== End Animate on Scroll ==========*/

}); //End Document Ready Event