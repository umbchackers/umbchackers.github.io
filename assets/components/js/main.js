//called when page DONE loading
$(document).ready(function() {

  var easterEgg = new Konami();
  easterEgg.load("https://hackumbc.org/space-hackers");

// Set the date we're counting down to
// var countDownDate = new Date("Oct 21, 2018 11:30:00").getTime();
// var countDownDate = new Date("Oct 21, 2018 13:00:00").getTime();
// // Update the count down every 1 second
// var x = setInterval(function() {
//     // Get todays date and time
//     var now = new Date().getTime(); 
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     // Output the result in an element with id="demo"
//     if (days > 0){
//       document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//       + minutes + "m " + seconds + "s ";
//     }
//     else if (days == 0) {
//       document.getElementById("demo").innerHTML = hours + "h "
//       + minutes + "m " + seconds + "s ";
//     }   
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "Submit";
//     }
// }, 1000);

//Hide Live button on mobile when clicked
$("#live").on("click", function() {
    $("#mobileLiveButton").css("display", "none");
  });
$("#faqTab").on("click", function() {
    $("#liveButton").css("display", "none");
  });
  // Smooth Scrolling
  $(document).on("click", 'a[href^="#"]', function(event) {
    // Prevent default link clicking behavior
    event.preventDefault();

    // Hide full screen overlay menu
    $("#fullscreen_menu").css("height", "0%");

    // Animate the scrolling
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });

  // Show menu on burger click
  $("#burger").on("click", function() {
    if ($("#fullscreen_menu").css("height") < "100") {
      $("#fullscreen_menu").css("height", "100%");
    } else {
      $("#fullscreen_menu").css("height", "0%");
    }
  });

  // Close menu on x click
  $("#closebtn").on("click", function() {
    $("#fullscreen_menu").css("height", "0%");
  });

  // Chevron Toggle on FAQ Section
  function toggleChevron(e) {
    $(e.target)
      .prev(".card-header")
      .find("i.fa")
      .toggleClass("rotate-down rotate-up");
  }

  // Toggle Chevrons
  $("#accordion").on("hide.bs.collapse", toggleChevron);
  $("#accordion").on("show.bs.collapse", toggleChevron);

  // Transparent Navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 200px, adds/removes solid class
    if ($(this).scrollTop() > 200) {
      $(".navbar").addClass("solid");
      $(".navbar").animate({ height: "auto" });
      // $("#mlh-trust-badge").removeClass("transparent");
      if ( checkMobile() ) {
        $("#logo").addClass("showLogo");
        $(".fa-bars").addClass("shift-bars");
      }
    } else if ($(this).scrollTop() <= 200) {
      // $("#mlh-trust-badge").addClass("transparent");
      $(".navbar").removeClass("solid");
      $(".navbar").animate({ height: "auto" });
      if ( checkMobile() ) {
        $("#logo").removeClass("showLogo");
      }
    }
  });

  //Link Styles
  $(window).scroll(function() {
    //ABOUT tab highlighting
    // 1200 500
    if ($(this).scrollTop() < 1200 && $(this).scrollTop() > 500) {
      $("#aboutTab").focus();
      $("#aboutTab").addClass("active");
      $
    }
    else {
      $("#aboutTab").removeClass("active");
      $("#aboutTab").blur();
    }
    //FAQ tab highlighting
    // 2750 1200
    if ($(this).scrollTop() < 2500 && $(this).scrollTop() > 1200) {
      $("#faqTab").focus();
      $("#faqTab").addClass("active");
      $("#liveButton").css("display", "none");
    }
    else {
      $("#faqTab").blur();
      $("#faqTab").removeClass("active");
    }
    //SPONSORS tab highlighting
    // 4200 2750
    if ($(this).scrollTop() < 4200 && $(this).scrollTop() > 2500) {
      $("#sponsorsTab").focus();
      $("#sponsorsTab").addClass("active");
    }
    else {
      $("#sponsorsTab").blur();
      $("#sponsorsTab").removeClass("active");
    }
    //SOCIAL MEDIA tab highlighting
    // 4200
    if ($(this).scrollTop() > 4200) {
      $("#social-mediaTab").focus();
      $("#social-mediaTab").addClass("active");
    }
    else {
      $("#social-mediaTab").blur();
      $("#social-mediaTab").removeClass("active");
    }
  });

  //Hide MLH banner when you get past About section
  $(window).scroll(function() {
    //Hide Banner
    if ($(this).scrollTop() > 900) {
      //$("#mlh-trust-badge").animate({top: "-130px"});
      if (checkMobile() == true) {
        $("#mlh-trust-badge").removeAttr("href");
        $("#mlh-trust-badge").removeAttr("target");
      }
      $("#mlh-trust-badge").addClass("bannerPos");
    }
    //Bring back Banner
    else if ($(this).scrollTop() < 900) {
      $("#mlh-trust-badge").attr(
        "href",
        "https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
      );
      $("#mlh-trust-badge").attr("target", "_blank");
      $("#mlh-trust-badge").removeClass("bannerPos");
    }
  });

  //Click to bring up banner
  $("#mlh-trust-badge").click(function() {
    // if banner is open then hands it links
    if ($("#mlh-trust-badge").hasClass("bannerPos") == false) {
      $("#mlh-trust-badge").attr(
        "href",
        "https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
      );
      $("#mlh-trust-badge").attr("target", "_blank");
    }
    $("#mlh-trust-badge").removeClass("bannerPos");
  });

  // Text Slide Animation
  $(window).scroll(function() {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 650) {
        $(this).addClass("slide");
      }
    });
  });
});
//end of Ready function

//Check Screen size
$(window).on("resize", function(e) {
  checkMobile();
});
function checkMobile() {
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 900) 
    return true;
  else 
    return false;
}
// Burger
function changeBurger(x) {
  var burger = document.getElementById("burger");
  if (x.classList.contains("change"))
    x.classList.remove("change");
  else
    x.classList.add("change");
}
