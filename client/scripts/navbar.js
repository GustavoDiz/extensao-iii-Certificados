function setupAcordeon() {
    $(".sublista").hide();

    $("#menu-acordeon > li").click(function () {
      if (!$(this).parents(".exercise-section").length) {
        $(this).siblings().find(".sublista").slideUp();
      }
      $(this).find(".sublista").slideToggle();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupAcordeon();
    setupimg();
  });