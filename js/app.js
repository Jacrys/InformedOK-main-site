$(document).ready(function () {
    $("#internet-speed-link").on("click", function () {
        OpenFrame($("#internet-speed-link").data("target"));
    });
    $("#home-link").on("click", function () {
        GoHome();
    });
});

function OpenFrame(source) {
  $("#dynamic-content").load(source);
  $('#myChart-wrapper').width("70%");
  $('#myChart-wrapper').addClass('pull-right');
  $("#dynamic-content").show();
  $("#main-content").hide();
}

function GoHome() {
  $("#main-content").show();
  $("#dynamic-content").hide();
  $("#dynamic-content").children().remove();
}