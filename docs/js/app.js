$(function(){
  $(".fa-chevron-left").parent("a").bind("click", function(e){
    e.preventDefault();
    window.history.back();
  });

  $("[data-off-canvas-toggle]").bind("click", function(e){
    e.preventDefault();
    var ele = $(".off-canvas");
    ele.toggleClass("off-canvas_active");
    ele.find(".off-canvas__bg").toggle();
  });

  $("[data-modal-toggle]").bind("click", function(e){
    e.preventDefault();
    $(".modal-bg").toggle();
    $(".modal").toggle();
  });

  $(".check").bind("click", function(e){
    e.preventDefault();
    $(this).toggleClass("check_active");
  });
});
