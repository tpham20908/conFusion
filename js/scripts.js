// $(document).ready(function () {
//   $("[data-toggle=\"reservation-tooltip\"]").tooltip();
// });

$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carouselBtn").click(() => {
    if ($("#carouselBtn").children("i").hasClass("fa-pause")) {
      $("#carouselBtn").children("i").removeClass("fa-pause");
      $("#carouselBtn").children("i").addClass("fa-play");
      $("#mycarousel").carousel("pause");
    }
    else if ($("#carouselBtn").children("i").hasClass("fa-play")) {
      $("#carouselBtn").children("i").removeClass("fa-play");
      $("#carouselBtn").children("i").addClass("fa-pause");
      $("#mycarousel").carousel("cycle");
    }
  });
  // $("#pause-btn").click(() => $("#mycarousel").carousel("pause"));
  // $("#play-btn").click(() => $("#mycarousel").carousel("cycle"));
});