$(function(){

  $(".container").addClass("container_active");

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

  /** goods list sort **/
  $("[data-sort-toggle]").bind("click", function(e){
    e.preventDefault();
    $(".goods").unbind("click");
    $(".goods__sort").toggleClass("goods__sort_active");
    if($(".goods__sort").hasClass("goods__sort_active")){
      $(".goods").bind("click", function(e){
        e.preventDefault();
        $(".goods__sort").toggleClass("goods__sort_active");
        $(this).unbind("click");
      });
    }
  });

  var startX;
  var dist;
  $(".slide__main").prepend($(".slide__main li:last-child"));
  $(".slide__main").bind("touchstart", function(e){
    var obj = e.changedTouches[0];
    startX = obj.pageX;
    e.preventDefault();
  }).bind("touchmove", function(e){
    e.preventDefault();
  }).bind("touchend", function(e){
    var obj = e.changedTouches[0];
    dist = obj.pageX - startX;
    //console.log(dist);
    if(dist > 50){
      slide_to_right();
    }else if(dist < -50){
      slide_to_left();
    }
    e.preventDefault();
  });
});


function slide_to_left() {
  console.log('to_left');
  var slide = $(".slide__main");
  var nav = $(".slide__nav");
  var width = slide.find("li").width();
  var item = slide.find("li:first-child");
  slide.animate({left:-width}, 1000, function(){
    slide.append(item);
    slide.css({left:''});
    nav.prepend(nav.find("li:last-child"));
  });
}

function slide_to_right(){
  console.log('to_right');
  var slide = $(".slide__main");
  var nav = $(".slide__nav");
  var width = slide.find("li").width();
  var item = slide.find("li:last-child");
  slide.animate({left:+width}, 1000, function(){
    slide.prepend(item);
    slide.css({left:''});
    nav.append(nav.find("li:first-child"));
  });
}
