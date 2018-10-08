//called when page DONE loading
$(document).ready(function() {
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
      $("#mlh-trust-badge").removeClass("transparent");
    } else {
      $("#mlh-trust-badge").addClass("transparent");
      $(".navbar").removeClass("solid");
      $(".navbar").animate({ height: "auto" });
    }
  });

  //Link Styles
  $(window).scroll(function() {
    //ABOUT tab highlighting
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
    if ($(this).scrollTop() < 2750 && $(this).scrollTop() > 1200) {
      $("#faqTab").focus();
      $("#faqTab").addClass("active");
    }
    else {
      $("#faqTab").blur();
      $("#faqTab").removeClass("active");
    }
    //SPONSORS tab highlighting
    if ($(this).scrollTop() < 4000 && $(this).scrollTop() > 2750) {
      $("#sponsorsTab").focus();
      $("#sponsorsTab").addClass("active");
    }
    else {
      $("#sponsorsTab").blur();
      $("#sponsorsTab").removeClass("active");
    }
    //SOCIAL MEDIA tab highlighting
    if ($(this).scrollTop() > 4000) {
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
        "https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2019-season&amp;utm_content=white"
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
        "https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2019-season&amp;utm_content=white"
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