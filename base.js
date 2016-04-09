var t=1;

var option_list=['Home','Activities',"Gallery",'Blog','About Us','Contact Us'];
var address_list=["index.html","activities.html","gallery.html","http://nssnitc.wordpress.com","about_us.html","contact_us.html"];
function filloptions(t,call){
  for(var i=0;i<t;i++){
      var element=$("<a id=\"opt"+i+"\" class=\"option_unselected\" href=\""+address_list[i]+"\" >"+option_list[i]+"</span>");
      $("#option_bar").append(element);
          var element=$("<a id=\"opt"+i+"\" class=\"option_unselected\" href=\""+address_list[i]+"\">"+option_list[i]+"</span>");
      $("#top-bar").append(element);
  }
  call();
}

function menuhandler(){
  $(".option_unselected").mouseover(function(){
    console.log(this.id);
      $(this).toggleClass("option_selected option_unselected");

  });
  $(".option_unselected").mouseleave(function(){
    $(this).toggleClass("option_selected option_unselected");
  });
}
function scrollhandler(y){
  if(y>250){
    $("#top-bar").fadeIn();
  }
  else{
    $("#top-bar").fadeOut();
  }
}




$(document).ready(function(){
  filloptions(6,function(){
    menuhandler();
  });
  $(window).scroll(function(){
    scrollhandler($(window).scrollTop());
  })
});
