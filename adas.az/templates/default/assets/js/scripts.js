/*

=====================================================

                    =    main scripts starts   =

=====================================================

*/

function initMap() {

    var mapOptions = {

        center: new google.maps.LatLng(40.3977065, 49.8401592),

        zoom: 15,

        styles: [

            {

                "featureType": "all",

                "elementType": "labels.text.fill",

                "stylers": [

                    {

                        "saturation": 36

                    },

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 40

                    }

                ]

            },

            {

                "featureType": "all",

                "elementType": "labels.text.stroke",

                "stylers": [

                    {

                        "visibility": "on"

                    },

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 16

                    }

                ]

            },

            {

                "featureType": "all",

                "elementType": "labels.icon",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative",

                "elementType": "geometry.fill",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 20

                    }

                ]

            },

            {

                "featureType": "administrative",

                "elementType": "geometry.stroke",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 17

                    },

                    {

                        "weight": 1.2

                    }

                ]

            },

            {

                "featureType": "administrative.province",

                "elementType": "labels.text",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative.locality",

                "elementType": "labels.text.fill",

                "stylers": [

                    {

                        "color": "#ffffff"

                    },

                    {

                        "visibility": "on"

                    }

                ]

            },

            {

                "featureType": "administrative.locality",

                "elementType": "labels.text.stroke",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative.neighborhood",

                "elementType": "all",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative.neighborhood",

                "elementType": "geometry.fill",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative.neighborhood",

                "elementType": "labels",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "administrative.land_parcel",

                "elementType": "geometry",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "landscape",

                "elementType": "geometry",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 20

                    }

                ]

            },

            {

                "featureType": "poi",

                "elementType": "geometry",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 21

                    }

                ]

            },

            {

                "featureType": "road.highway",

                "elementType": "geometry.fill",

                "stylers": [

                    {

                        "lightness": 17

                    },

                    {

                        "color": "#d6c400"

                    }

                ]

            },

            {

                "featureType": "road.highway",

                "elementType": "geometry.stroke",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 29

                    },

                    {

                        "weight": 0.2

                    }

                ]

            },

            {

                "featureType": "road.arterial",

                "elementType": "geometry",

                "stylers": [

                    {

                        "lightness": 18

                    },

                    {

                        "color": "#a29100"

                    }

                ]

            },

            {

                "featureType": "road.arterial",

                "elementType": "geometry.fill",

                "stylers": [

                    {

                        "visibility": "on"

                    },

                    {

                        "color": "#ccb300"

                    }

                ]

            },

            {

                "featureType": "road.arterial",

                "elementType": "labels.text",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "road.local",

                "elementType": "geometry",

                "stylers": [

                    {

                        "lightness": 16

                    },

                    {

                        "color": "#5a5300"

                    }

                ]

            },

            {

                "featureType": "transit",

                "elementType": "geometry",

                "stylers": [

                    {

                        "color": "#000000"

                    },

                    {

                        "lightness": 19

                    }

                ]

            },

            {

                "featureType": "water",

                "elementType": "all",

                "stylers": [

                    {

                        "visibility": "off"

                    }

                ]

            },

            {

                "featureType": "water",

                "elementType": "geometry",

                "stylers": [

                    {

                        "lightness": 17

                    },

                    {

                        "visibility": "on"

                    },

                    {

                        "color": "#273a6f"

                    }

                ]

            },

            {

                "featureType": "water",

                "elementType": "geometry.fill",

                "stylers": [

                    {

                        "invert_lightness": true

                    },

                    {

                        "hue": "#0015ff"

                    },

                    {

                        "lightness": "-100"

                    }

                ]

            },

            {

                "featureType": "water",

                "elementType": "geometry.stroke",

                "stylers": [

                    {

                        "color": "#990c0c"

                    },

                    {

                        "saturation": "0"

                    }

                ]

            }

        ],

        panControl: false,

        zoomControl: false,

        mapTypeControl: false,

        scaleControl: false,

        streetViewControl: false,

        overviewMapControl: false,

        rotateControl: false

    };

    var map = new google.maps.Map(document.getElementById("map"),

        mapOptions);

    // 40.3977065,49.8401592,220

    var marker = new google.maps.Marker({

        position: new google.maps.LatLng(40.3977065, 49.8401592)

    });

    marker.setMap(map);

}

$(document).ready(function () {

    $(".blog-slider").owlCarousel({

        margin: 25,

        loop: true,

        autoplay: true,

        nav: true,

        navText: ["<img src='" + BASE_URL + "templates/default/assets/css/icons/toleft.png'>", "<img src='" + BASE_URL + "templates/default/assets/css/icons/toright.png'>"],

        autoplayTimeout: 2000,

        autoplayHoverPause: true,

        responsiveClass: true,

        responsive: {

            0: {

                items: 1,

                // nav:true

            },

            600: {

                items: 1,

                // nav: false   

            },

            768: {

                items: 3,

                // nav: false

            }

        }

    });



    var TO = false;

    var scroll_static = true;



    var bkDefault = $(".bk-img .bk").css("top"),

        frDefault = $(".bk-img .fr").css("top")

    $(window).scroll(function () {

        // detectin scroll event starts





        if ($(window).width() >= 1024) {

            var slide = 100

        } else {

            var slide = 25

        }

        if (scroll_static) {

            scroll_static = false;

            $(".bk-img .bk").css({ "top": parseInt(bkDefault) + slide }).addClass("scroll");

            $(".bk-img .fr").css({ "top": parseInt(frDefault) + slide }).addClass("scroll");

        }

        if (TO !== false) { clearTimeout(TO); }

        TO = setTimeout(myfunction, 200);

        // detectin scroll event starts



        function myfunction() {

            $(".bk-img .bk").css({ "top": parseInt(bkDefault) }).removeClass("scroll");

            $(".bk-img .fr").css({ "top": parseInt(frDefault) }).removeClass("scroll");

            scroll_static = true;

        }

    });



    new WOW().init();



    //home bk animation starts

    $(document).mousemove(function (e) {

        let width_X, width_Y, x_Left, y_Left, x_Right, y_Right;



        width_X = e.pageX;

        width_Y = e.pageY;



        x_Left = Math.ceil(-width_X / 40);

        y_Left = Math.ceil(-width_Y / 10);



        x_Right = Math.ceil(width_X / 40);

        y_Right = Math.ceil(width_Y / 10);



        $(".bk-imgs img:nth-child(1n + 1)").css({

            transform: "translate3d(" + x_Left + "px , " + y_Left + "px , 0px)"

        });



        $(".bk-imgs img:nth-child(2n + 1)").css({

            transform: "translate3d(" + x_Right + "px , " + y_Right + "px , 0px)"

        });

    });

    //home bk animation ends



    setTimeout(function () {

        $(".peoples .img-outer:first-child ").removeClass(" wow bounceInLeft").addClass(" animated bounceOutLeft").css({ "animation-name": "bounceOutLeft" })

        $(".peoples .img-outer:nth-child(2) ").removeClass(" wow bounceInUp").addClass(" animated bounceOutDown").css({ "animation-name": "bounceOutDown" })

        $(".peoples .img-outer:nth-child(3) ").removeClass(" wow bounceInRight").addClass(" animated bounceOutRight").css({ "animation-name": "bounceOutRight" })



        setTimeout(function () { $(".peoples .img-outer").addClass("hide") }, 1500);

    }, 3000);





    /* page ajax */

    $(".menu-block .menus li").on("click", function (e) {

        let ajax, getLink, _this, a;

        _this = $(this);

        a = _this.find("a");

        ajax = a.attr("data-ajax");

        getLink = a.attr("href");

        if (ajax == "true") {

            e.preventDefault();

            $(".menu-block .menus li").removeClass("active");

            _this.addClass("active");

            $(".loading-page").load(getLink + ' .loading-page > * ');

            history.pushState(null, null, getLink);

            if (_this.index() == 1) {



                x = window.matchMedia("(max-width: 768px)");

                if (x.matches) {

                    $(".menus li a").css({

                        color: "#fff"

                    });

                }

                setTimeout(function () {

                    $(".register-left-panel").css({

                        transform: "scale3d(1,1,1)"

                    });

                    $(".logo a img").attr("src", "" + BASE_URL + "templates/default/assets/css/icons/logo-w.png");

                }, 500)

                $(".loading-page").css({

                    opacity: 0,

                    transition: "0s"

                })

                setTimeout(function () {

                    $(".loading-page").css({

                        opacity: 1,

                        transition: "0.3s"

                    })

                    $(".prof1").click(function () {

                        $(this).addClass("active");

                        $(".prof2").removeClass("active");

                        $('.form_type').val('Coder');

                    })

                    $(".prof2").click(function () {

                        $(this).addClass("active");

                        $(".prof1").removeClass("active");

                        $('.form_type').val('Dizayner');

                    })

                    $(".coder-bt").click(function () {

                        $(this).addClass("active")

                        $(".design-bt").removeClass("active")

                    })

                    $(".design-bt").click(function () {

                        $(this).addClass("active")

                        $(".coder-bt").removeClass("active")

                    })

                }, 10)

            } else {

                $(".menus li a").css({

                    color: "#000"

                });

                $(".loading-page").css({

                    opacity: 0,

                    transition: "0s"

                })

                setTimeout(function () {

                    $(".loading-page").css({

                        opacity: 1,

                        transition: "0.3s"

                    })

                }, 10);

                $(".logo a img").attr("src", "" + BASE_URL + "templates/default/assets/css/icons/logo.png");

            }

        }

    });







    // $(".logo a").on("click", function(e){

    //     let _this, getLink;

    //     e.preventDefault();

    //     _this = $(this);

    //     getLink  = _this.attr("href");

    //     $(".loading-page").load(getLink + ' .loading-page > *');

    //    history.pushState(null, null, getLink );

    // });



    setTimeout(function () {

        $(".register-left-panel").css({

            transform: "scale3d(1,1,1)"

        });

        if ($(".reg-header").length > 0) {

            $(".reg-header .logo img").attr("src", "" + BASE_URL + "templates/default/assets/css/icons/logo-w.png");

        }



    }, 500);





    $(".prof1").click(function () {

        $(this).addClass("active")

        $(".prof2").removeClass("active")
        $('.form_type').val('Coder');

        // $('#myForm .hideMe').fadeOut(0);
        $('.mt').removeClass('mDown');
        // $('#myForm .hideMe').fadeIn('slow');
        setTimeout(function(){$('.mt').addClass('mDown');},500)
        // $('.mt').addClass('mDown');
    })

    $(".prof2").click(function () {

        $(this).addClass("active")

        $(".prof1").removeClass("active")
        $('.form_type').val('Designer');

        // $('#myForm .hideMe').fadeOut();
        $('.mt').removeClass('mDown');
        // $('#myForm .hideMe').fadeIn('slow');
        setTimeout(function(){$('.mt').addClass('mDown');$('#myForm .hideMe').fadeIn('slow')},500)
        // $('.mt').addClass('mDown');

    })



    $(".coder-bt").click(function () {

        $(this).addClass("active")

        $(".design-bt").removeClass("active");

        $('.form_type').val('Coder');

        $("#designer").fadeOut("slow");

        $("#koder").fadeIn("slow");

    })

    $(".design-bt").click(function () {

        $(this).addClass("active");

        $(".coder-bt").removeClass("active");

        $('.form_type').val('Designer');

        $("#koder").fadeOut("slow");

        $("#designer").fadeIn("slow");

    });



});

$(window).on("load", function () {
    var pageUrl = location.pathname.split("/").pop();
    if (pageUrl == "register") {
        setTimeout(function () {
            $(".logo a img").attr("src", "https://adas.az/templates/default/assets/css/icons/logo-w.png");
        }, 100);
    }

})

$(document).on('click', '.submit-btn', function (e) {
    e.preventDefault();
    var name = $("#name");
    var surname = $("#surname");
    var brith_data = $("#brith_data");
    var contact_number = $("#contact_number");
    var education = $("#education");
    var error = $('#tnx')

    if (name.val() == '') {
        name.addClass("inputCrash");
        // alert('');
        error.text('Adinizi daxil edin')
    }
    else {
        name.removeClass("inputCrash");
    }

    if (surname.val() == '') {
        surname.addClass("inputCrash");
        // alert('Adinizi daxil edin');
        error.text('Soyadinizi daxil edin')
    }
    else {
        surname.removeClass("inputCrash");
    }

    if (brith_data.val() == '') {
        brith_data.addClass("inputCrash");
        // alert('Soyadinizi daxil edin');

    }
    else {
        brith_data.removeClass("inputCrash");
        error.text('Doğum tarixinizi daxil edin')
    }

    if (contact_number.val() == '') {
        contact_number.addClass("inputCrash");
        // alert('Telefon nömrənizi daxil edin');
        error.text('Nömrənizi daxil edin')
    }
    else {
        contact_number.removeClass("inputCrash");
    }

    if (education.val() == '') {
        education.addClass("inputCrash");
        // alert('Təhsilinizi qeyd edin');
        error.text('Təhsilinizi daxil edin')
    }
    else {
        education.removeClass("inputCrash");
    }

    if (name.val() !== '' || surname.val() !== '' || brith_data.val() !== '' || contact_number.val() !== '' || education.val() !== '') {
        $('#myForm').submit();
    }

    e.preventDefault();
    return false;
});


$(document).on('click', '.submit-btn', function (e) {
    e.preventDefault();
    var fristname = $("#fristname");
    var lastname = $("#lastname");
    var phone = $("#phone");

    if (fristname.val() == '') {
        fristname.addClass("inputCrash");
        // alert('');
    }
    else {
        fristname.removeClass("inputCrash");
    }

    if (lastname.val() == '') {
        lastname.addClass("inputCrash");
        // alert('Adinizi daxil edin');
    }
    else {
        lastname.removeClass("inputCrash");
    }

    if (phone.val() == '') {
        phone.addClass("inputCrash");
        // alert('Soyadinizi daxil edin');
    }
    else {
        phone.removeClass("inputCrash");
    }


    if (fristname.val() !== '' || lastname.val() !== '' || phone.val() !== '') {
        $('#myForm1').submit();
    }

    e.preventDefault();
    return false;
});

$(window).keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});



// $("#contact_number").inputmask();
// $("#contact_number").inputmask({"mask": "(+99) 050-999-99-99"});
$(".modal_inner > .right ").on("click", function () {
    setInterval(function () {
        if (document.querySelector(".modal_inner > img:last-child").complete) {
            setTimeout(function () {
                $(".modal_inner > img:last-child").fadeIn();
            }, 1000)
            clearInterval;
        }
    }, 200)
})

$(".modal_inner > .left ").on("click", function () {
    setInterval(function () {
        if (document.querySelector(".modal_inner > img:last-child").complete) {
            setTimeout(function () {
                $(".modal_inner > img:last-child").fadeIn();
            }, 1000)
            clearInterval;
        }
    }, 200)
})

$(".teachers-sc .list .gallery").on("click", function () {
    setInterval(function () {
        if (document.querySelector(".modal_inner > img:last-child").complete) {
            setTimeout(function () {
                $(".modal_inner > img:last-child").fadeIn();
            }, 1000)
            clearInterval;
        }
    }, 200)
})
// $("#contact_number").inputmask({"mask": "(999) 999-999-99-99"});
// window.onload = function() {
//     MaskedInput({
//        elm: document.getElementById('contact_number'), // select only by id
//        format: '+994 (__) ___-__-__',
//        separator: '+994 ()-'
//     });
//  };