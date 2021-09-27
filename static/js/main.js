(function ($) {
  "use strict";
  $('.mean-menu').meanmenu({
    meanScreenWidth: "1199"
  });
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.navbar-area').addClass("is-sticky");
    } else {
      $('.navbar-area').removeClass("is-sticky");
    }
  });
  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass("active");
  });
  $(".others-option .search-box i").on("click", function () {
    $(".search-overlay").toggleClass("search-overlay-active");
  });
  $(".search-overlay-close").on("click", function () {
    $(".search-overlay").removeClass("search-overlay-active");
  });
  $('.home-slides').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 5,
    items: 1,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"]
  });
  $('.home-slides-two').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoHeight: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"]
  });
  $('.testimonials-slides, .feedback-slides').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"]
  });
  $('.popup-youtube').magnificPopup({
    disableOn: 320,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.team-slides').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      }
    }
  });
  $('.portfolio-slides').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  });
  $(function () {
    $('.accordion').find('.accordion-title').on('click', function () {
      $(this).toggleClass('active');
      $(this).next().slideToggle('fast');
      $('.accordion-content').not($(this).next()).slideUp('fast');
      $('.accordion-title').not($(this)).removeClass('active');
    });
  });
  $('.odometer').appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  $('.article-image-slides').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"]
  });
  $('select').niceSelect();
  $('.input-counter').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find('.plus-btn'),
      btnDown = spinner.find('.minus-btn'),
      min = input.attr('min'),
      max = input.attr('max');
    btnUp.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on('click', function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  function makeTimer() {
    var endTime = new Date("September 20, 2022 17:00:00 PDT");
    var endTime = (Date.parse(endTime)) / 1000;
    var now = new Date();
    var now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 0);
  // $('.portfolio-sidebar-sticky').stickySidebar({
  //   topSpacing: 85,
  //   bottomSpacing: 85
  // });
  $('.blog-slides').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-chevron'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });
  $(".newsletter-form").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      formErrorSub();
      submitMSGSub(false, "Please enter your email correctly.");
    } else {
      event.preventDefault();
    }
  });

  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }

  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass('hide');
    }, 4000)
  }

  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000)
  }

  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction
  });
  $(function () {
    $(window).on('scroll', function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $('.go-top').addClass('active');
      if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function () {
      $("html, body").animate({
        scrollTop: "0"
      }, 500);
    });
  });
  if ($('.wow').length) {
    var wow = new WOW({
      mobile: false
    });
    wow.init();
  }
}(jQuery));
