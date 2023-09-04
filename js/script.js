// Mobile navbar close on navlink click
if (parseInt($(window).width()) < 500) {
  $(".insideLinks").click(function (event) {
    $("#nav-check").trigger("click");
  });
}



$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
  }, 500);
});


// Modal pop up
var modalthree = document.getElementById("myModalthree");
var btnthree = document.getElementById("myBtnthree");
btnthree.onclick = function () {
  modalthree.style.display = "block";
};
$('.closethree').click(function (e) { 
  console.log('dsa')
  $('#myModalthree').hide();
});

window.onclick = function (event) {
  if (event.target == modalthree) {
    modalthree.style.display = "none";
  }
};

$(document).ready(function () {
  if(screen.width>750){
    document.getElementById("tabBtnImages").click();    
  }else{
    document.getElementById("tabBtnImagesMob").click();    
  }
  $(".slide_form_btn1").click(function () {
    $(".slide_form_main1").toggleClass("slide_form_main1_out");
  });
  
  var owl1 = $(".interiorgallery");
  owl1.owlCarousel({
    autoplay: false,
    center: false,
    items: 1,
    loop: true,
    autoplayTimeout: 500,
    autoplayHoverPause:true,
    smartSpeed: 500,
    dots: false,
    navContainer: "#custom-nav1",
    navText: [
      '<img src="img/left.png" style="width: 10%;"/>',
      '<img src="img/right.png" style="width: 10%;"/>',
    ],
    responsiveClass: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 15,
        nav: false,
        dots: true,
        center: true,
      },
      600: {
        items: 1,
        stagePadding: 0,
        margin: 15,
        nav: false,
        dots: true,
        center: true,
      },
      1000: {
        items: 1,
        dots: false,
        nav: true,
      },
    },
  });

  var owl1 = $(".testi");
  owl1.owlCarousel({
    autoplay: false,
    center: false,
    items: 2,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    dots: true,
    navContainer: "#custom-nav9",
    navText: [
      '<img src="img/left.png" style="width: 10%;"/>',
      '<img src="img/right.png" style="width: 10%;"/>',
    ],
    responsiveClass: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 15,
        nav: false,
        dots: true,
        center: false,
      },
      600: {
        items: 1,
        stagePadding: 0,
        margin: 15,
        nav: false,
        dots: true,
        center: true,
      },
      1000: {
        items: 2,
        nav: true,
        dots: true,
      },
    },
  });

  var owl1 = $(".why-medalleo");
  owl1.owlCarousel({
    autoplay: true,
    center: false,
    items: 1,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    smartSpeed: 500,
    dots: true,
    navContainer: "#custom-nav4",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
    responsiveClass: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 10,
        nav: false,
        dots: true,
        center: false,
      },
      700: {
        items: 1,
        stagePadding: 0,
        margin: 5,
        nav: false,
        dots: true,
        center: false,
      },
      1000: {
        items: 1,
        // dots: true,
        nav: true,
      },
    },
  });

  var owl3 = $(".liveatthecenteroftheactionSlider");
  owl3.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 2,
    loop: true,
    dots: false,
    navContainer: "#custom-nav3",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
    responsiveClass: true,
    margin: 40,
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 5,
      },
      750: {
        items: 2,
        stagePadding: 0,
        margin: 15,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });

  var owlGridImages = $(".slideGridImages");
  owlGridImages.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    navContainer: "#navGridSlideImages",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });
  var owlGridImagesMob = $(".slideGridImagesMob");
  owlGridImagesMob.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    navContainer: "#navGridSlideImagesMob",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });
   var owlGridVideos = $(".slideGridVideos");
   owlGridVideos.owlCarousel({
     autoplay: false,
     autoplayHoverPause:true,
     items: 1,
     loop: true,
     dots: false,
     nav: true,
     navContainer: "#navGridSlideVideos",
     navText: [
       '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
       '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
     ],
   });

  var owlGridslide = $(".slideGrid1");
  owlGridslide.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    navContainer: "#navGridSlide1",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });

   var owlGridslide = $(".slideGrid9");
  owlGridslide.owlCarousel({
    autoplay: true,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    autoplayTimeout: 9000,
    smartSpeed: 1000,
    dots: false,
    navContainer: "#navGridSlide9",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });



  var owlGrid1 = $(".slideGrid3");
  owlGrid1.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    navContainer: "#navGridSlide3",
    navText: [
      '<img src="img/leftSolidArrow.png" style="width: 70%;"/>',
      '<img src="img/rightSolidArrow.png" style="width: 70%;"/>',
    ],
  });

  var owl13 = $(".unitPlan");
  owl13.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    navContainer: "#unitPlanSlide",
    navText: [
      '<img src="img/ar_2-.jpg" style="width: 70%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 70%;"/>',
    ],
  });


  var owlSite = $(".slideSitePlan");
  owlSite.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    navContainer: "#siteplanControls",
    navText: [
      '<img src="img/ar_2-.jpg" style="width:90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });

    var owlSite = $(".unit");
  owlSite.owlCarousel({
    autoplay: false,
    autoplayHoverPause:true,
    items: 1,
    loop: false,
    dots: false,
    nav:false,
    navContainer: "#site",
    navText: [
      '<img src="img/ar_2-.jpg" style="width:90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });


  
  var owlSite1 = $(".slideGrid2");
  owlSite1.owlCarousel({
    autoplay: true,
    autoplayHoverPause:true,
    items: 1,
    loop: true,
    dots: false,
    nav:true,
    navContainer: "#navGridSlide2",
    navText: [
      '<img src="img/ar_2-.jpg" style="width:90%;"/>',
      '<img src="img/ar_1-.jpg" style="width: 90%;"/>',
    ],
  });


  $('[data-fancybox="galimages_2"]').fancybox({
    caption : function( instance, item ) {
      var caption = $(this).data('caption') || '';
  
      if ( item.type === 'image' ) {
        caption = (caption.length ? caption + '<br />' : '');
      }
  
      return caption;
    }
  });

  $('[data-fancybox="galimages_1"]').fancybox({
    caption : function( instance, item ) {
      var caption = $(this).data('caption') || '';
  
      if ( item.type === 'image' ) {
        caption = (caption.length ? caption + '<br />' : '');
      }
  
      return caption;
    }
  });

});

// lazy Load Images And Iframes
// function lazyLoadImages() {
//   document.addEventListener("DOMContentLoaded", function () {
//     var lazyImages = [].slice.call(document.querySelectorAll(".lazyImg"));
//     if ("IntersectionObserver" in window) {
//       var lazyImageObserver = new IntersectionObserver(function (entries) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) {
//             var lazyImage = entry.target;
//             lazyImage.src = lazyImage.dataset.src;
//             lazyImage.classList.remove("lazy");
//             lazyImageObserver.unobserve(lazyImage);
//           }
//         });
//       });

//       lazyImages.forEach(function (lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     } else {
//       for (var l = 0; l < lazyImages.length; l++) {
//         lazyImages[l].setAttribute(
//           "src",
//           lazyImages[l].getAttribute("data-src")
//         );
//       }
//     }
//   });
// }
// lazyLoadImages();

// Footer form

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(window).width() > 820) {
//       if ($(document).scrollTop() > 1) {
//         $(".bannerForm").css("display", "block");
//       } else {
//         $(".bannerForm").css("display", "block");
//       }
//     }
//   });
// });

// back to top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top_arow").show();
      $(".headerNavbar").addClass("headerScrollOn");
      $(".lg").addClass("logosize");
      $("#logo").attr("src", "img/logo-scroll.png");
    } else {
      $(".top_arow").hide();
      $(".headerNavbar").removeClass("headerScrollOn");
      $(".lg").removeClass("logosize");
      $("#logo").attr("src", "img/newlogo.png");
    }
    
  });
});

// Tab open close
function openTab(evt, tabName, btnName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(btnName).style.display = "block";
  evt.currentTarget.className += " active";
}
