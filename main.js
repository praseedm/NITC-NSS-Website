function fixslides(){
  $("body").css("overflow-x","hidden");
  $("body").css("max-width","100%");
  console.log("Fixing slides");
  var h=$("#slideshow").position().top;
  var slideshow=$("#slideshow");
 var screenWidth=$(window).width();

 $(".slide").width(screenWidth-20);
  $(".slide").height((screenWidth*5)/16);
 console.log("slide width "+screenWidth);
 slideshow.height((screenWidth*5)/16);
 console.log("slideshow height "+((screenWidth*5)/16));
 //SLIDE 1
 $(".slide").css("position",'absolute');
 $("#slide0").css("left","10px");
 $("#slide1").css("left","10px");
 $("#slide2").css("left","10px");
 $("#slide1").fadeOut();
 $("#slide2").fadeOut();
}
var cur=0;
function transition(){
  console.log("Transit "+cur);
  $("#slide"+cur).fadeOut();
  cur++;
  if(cur==3){
    cur=0;
  }
  $("#slide"+cur).fadeIn();
}

$(document).ready(function(){

  fixslides();
  setInterval(function(){transition();},6000);
});
