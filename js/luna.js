$(".nav-btn").click(function(){
  $(".nav").toggleClass('open close');
  $(".nav-btn").toggleClass('fa-bars fa-times');
}) ;

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 600) {
      $('#nav-fade').addClass('animated');
    } else if (ww >= 601) {
      $('#nav-fade').removeClass('animated');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

$('.filter-btn a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});


$(document).ready(function() {
  $('.header-slick').slick({
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [ {
      breakpoint: 600,
      settings: {
        infinite: false,
        autoplay: false,
        dots: true,
        arrows: false,
      }
    } ]
  });
});

$(document).ready(function(){
  $('.know-it-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, 
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slide: '.know-it-slick-item',
  mobileFirst:true,
  responsive: [   
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 3,
        dots: true,
      }
    }, 
  ]
  });
});

$(document).ready(function(){
  $('.clients-slick').slick({
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst:true,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        //arrows: true,
      }
    },    
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        //arrows: true,
      }
    },
  ]
  });
})


$(document).ready(function(){
  $('.partners').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, 
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  mobileFirst:true,
  responsive: [   
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
      }
    }, 
  ]
  });
});



filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter-item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filter-item-show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filter-item-show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter-btn-active");
    current[0].className = current[0].className.replace(" filter-btn-active", "");
    this.className += " filter-btn-active";
  });
}



function enableBtn(){
 document.getElementById("button1").disabled = false;
}



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}