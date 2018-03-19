$(document).ready(function() {
  $("#navbarResponsive").on("click","a", function (event) {
          event.preventDefault();
          if ($(this).attr('href') != "#"){

          var id  = $(this).attr('href'),
              top = $(id).offset().top - 150;
          $('body,html').animate({scrollTop: top}, 1500);
        }
          
      });
});
