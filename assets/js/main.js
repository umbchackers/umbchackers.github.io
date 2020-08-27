// const sections = {
//     about: {
//         el: document.getElementById("about"),
//         rect: document.getElementById("about").getBoundingClientRect()
//     },
//     faq: {
//         el: document.getElementById("faq"),
//         rect: document.getElementById("faq").getBoundingClientRect()
//     },
//     sponsors: {
//         el: document.getElementById("sponsors"),
//         rect: document.getElementById("sponsors").getBoundingClientRect()
//     },
//     socialMedia: {
//         el: document.getElementById("socialMedia"),
//         rect: document.getElementById("socialMedia").getBoundingClientRect()
//     }
// };

// window.onscroll = e => {
//     const elementInView = Object.values(sections)
//         .find(section => 
//             section.rect.y <= window.scrollY && section.rect.y + section.rect.height > window.scrollY
//         );

//     if (elementInView) 
//     {
//         const id = elementInView.el.id;

//         document.querySelector(`nav a.active`)?.classList.remove("active");
//         document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
//     }
//     else
//     {
//         document.querySelector(`nav a.active`)?.classList.remove("active");
//     }
// }

// window.onresize = () => {

// }

// bind click listeners to mobile menu open and close buttons
const mobileMenu = document.getElementById("fullscreen_menu");
document.getElementById("burger").onclick = () => mobileMenu.style.height = "100%";
document.getElementById("closebtn").onclick = () => mobileMenu.style.height = "0%";

// Smooth Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
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

//     // Transparent Navbar
//     $(window).scroll(function () {
//         // checks if window is scrolled more than 200px, adds/removes solid class
//         if ($(this).scrollTop() > 200) {
//             // $("#mlh-trust-badge").removeClass("transparent");
//             if (checkMobile()) {
//                 $("#logo").addClass("showLogo");
//                 $(".fa-bars").addClass("shift-bars");
//             }
//         } else if ($(this).scrollTop() <= 200) {
//             // $("#mlh-trust-badge").addClass("transparent");
//             if (checkMobile()) {
//                 $("#logo").removeClass("showLogo");
//             }
//         }

//         //ABOUT tab highlighting
//         // 1200 500
//         if ($(this).scrollTop() < 1200 && $(this).scrollTop() > 500) {
//             $("#aboutTab").focus();
//             $("#aboutTab").addClass("active");
//             $
//         }
//         else {
//             $("#aboutTab").removeClass("active");
//             $("#aboutTab").blur();
//         }
//         //FAQ tab highlighting
//         // 2750 1200
//         if ($(this).scrollTop() < 2700 && $(this).scrollTop() > 1200) {
//             $("#faqTab").focus();
//             $("#faqTab").addClass("active");
//             $("#liveButton").css("display", "none");
//         }
//         else {
//             $("#faqTab").blur();
//             $("#faqTab").removeClass("active");
//         }
//         //SPONSORS tab highlighting
//         // 4200 2750
//         if ($(this).scrollTop() < 4000 && $(this).scrollTop() > 2700) {
//             $("#sponsorsTab").focus();
//             $("#sponsorsTab").addClass("active");
//         }
//         else {
//             $("#sponsorsTab").blur();
//             $("#sponsorsTab").removeClass("active");
//         }
//         //SOCIAL MEDIA tab highlighting
//         // 4200
//         if ($(this).scrollTop() > 4000) {
//             $("#social-mediaTab").focus();
//             $("#social-mediaTab").addClass("active");
//         }
//         else {
//             $("#social-mediaTab").blur();
//             $("#social-mediaTab").removeClass("active");
//         }

//         //Hide Banner
//         if ($(this).scrollTop() > 900) {
//             //$("#mlh-trust-badge").animate({top: "-130px"});
//             if (checkMobile() == true) {
//                 $("#mlh-trust-badge").removeAttr("href");
//                 $("#mlh-trust-badge").removeAttr("target");
//             }
//             $("#mlh-trust-badge").addClass("bannerPos");
//         }
//         //Bring back Banner
//         else if ($(this).scrollTop() < 900) {
//             $("#mlh-trust-badge").attr(
//                 "href",
//                 "https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
//             );
//             $("#mlh-trust-badge").attr("target", "_blank");
//             $("#mlh-trust-badge").removeClass("bannerPos");
//         }
//     });

//     //Click to bring up banner
//     $("#mlh-trust-badge").click(function () {
//         // if banner is open then hands it links
//         if ($("#mlh-trust-badge").hasClass("bannerPos") == false) {
//             $("#mlh-trust-badge").attr(
//                 "href",
//                 "https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
//             );
//             $("#mlh-trust-badge").attr("target", "_blank");
//         }
//         $("#mlh-trust-badge").removeClass("bannerPos");
//     });

//     // Text Slide Animation
//     $(window).scroll(function () {
//         $(".slideanim").each(function () {
//             var pos = $(this).offset().top;
//             var winTop = $(window).scrollTop();
//             if (pos < winTop + 650) {
//                 $(this).addClass("slide");
//             }
//         });
//     });
// });
// //end of Ready function

// //Check Screen size
// $(window).on("resize", function (e) {
//     checkMobile();
// });

// function checkMobile() {
//     var newWindowWidth = $(window).width();
//     if (newWindowWidth < 900)
//         return true;
//     else
//         return false;
// }