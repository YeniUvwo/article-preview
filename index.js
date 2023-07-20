
$(document).ready(function() {
    $('[data-bs-toggle="popover"]').popover({
      html: true,
      content: function() {
        return $('#data-bs-content').html();
      }
    });

    $(".btn-mobileA").click(function(){
      $(".profile, .btn-mobileA").hide();
      $(".button-text, .btn-mobileB").show();
    });
    $(".btn-mobileB").click(function(){
      $(".button-text, .btn-mobileB").hide();
      $(".profile, .btn-mobileA").show();
      
    });
});