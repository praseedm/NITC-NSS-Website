var total_number_of_boxes=0;

function properify(){
  var screenWidth=$(window).width();
  var number_of_boxes=Math.floor(screenWidth/430);
  var left_space=screenWidth%(number_of_boxes*430);
  console.log(screenWidth+" "+left_space);
  document.getElementById("content").style.paddingLeft=((left_space-4)/2)+"px";
  document.getElementById("content").style.height=(Math.ceil(total_number_of_boxes/(number_of_boxes))*480)+50;
}

var headings=["AGRICULTURAL FARMING","BLOOD IDENTIFICATION CAMP","GREEN COMMUNITY TALK","NATIONAL EDUCATIONAL DAY","AAVISHKAR-PROJECT DAISY","1.	 NSS HOUSE","EDUCATIONAL CLASSES","PRERNA ELECTRONICS HANDS ON WORKSHOP AND AWARENESS CAMPAIGN","CALICUT BEACH CLEANING DRIVE","PALAYAM SUBWAY CLEANUP","KOZHIKODE ANNUAL MINI MARATHON","ANNUAL CAMP","SNEHRAGAM"];
var matter=[" The farm near the archi block reaps a wide variety of vegetables like cabbage ,ladiesfinger ,beans, tapioca and fruits like banana, papaya and many more.",
	"This camp was conducted in our college with the help of the medical college students. A huge participation from our students was observed.",
	"A talk on green community by Dr.Shoukath Ali Eroth was conducted. He encouraged our students to take an active participation in making this world a better place to live.",
	"It was celebrated by conducting many events exclusively for the first years like essay writing , quiz ,extempore and many more.",
	"Aavishkar is a social activity as a part of our college technical fest Thatva. As a part of the last year aavishkar Project DAISY was took up which is about  recording many books for the blind.",
  "Near the company junction we can see the nss house which was built with the help of nss volunteers for a woman who was fighting alone with the cancer case of her mother and earning money for her school going daughter. Before this nss house they used to live in very poor conditions as they did not have proper roof over their heads. This house has two bedrooms, 1 kitchen and 1 bathroom.",
  "Educational classes are conducted as a part of nss programme in which nss volunteers of nit calicut take classes to prepare students of +1 and +2 for their board examination and for other entrance exams ",
  "Prerna is to give inspiration and as a part of this process we nss volunteeers went to different schools to give the students the motivation behind joining engineering by conducting different electronics workshops.",
  "On Gandhi Jayanti which was declared as the international non violence day, nss volunteers went to kozhikode beach to help cleaning beach premises and to support the ideals of “Swachh Bharat Abhyan” .",
  "As a part of swachh bharat abhyan the b-arch students of nit calicut as a part of nss programme went to clean palayam subways and artstically make the place appear more beautiful with their creative minds. A well renowned governor also came on this occasion for the inauguration and this work was also recognized by the local news papers.",
  "Nss volunteers aid the iim staff in organising this annual nini marathon held for the awareness of fitness and for funding the orphaneges and old age homes for their small requirements. This is a very well recognised event and is often inaugurated by the collector.",
  "Every year we nss volunteer try to contribute to the society through nss annual camp. As a part of this camp we nss volunteers went to  a school in achoor and held local interactive sessions and did vegetative plantation on the school grounds. Not only this but we also helped in clearing the paths from bushes and wild plants.",
  "As a part of snehragam we celebrated childrens day 2015 by taking 64 orphange children to kozhikode planetorium and showered them with lots of love.<br>This year we brought orphanage children to our nit auditorium and shared our love by preparing food for them and conducted different events such as singing and dancing. Honourable collector were our chief guest of the event."
];


function preparedisplay(n){
  $("#display_image").attr("src",headings[n]+".png");
  $("#display_heading").html(headings[n]);
  $("#display_matter").html(matter[n]);


  dimmer();
}
function dimmer(){
  $("#pager").fadeOut();
    $("#display").fadeIn();
    var totalh=200+$("#display_matter").height()+80;
      var screenHeight=screen.height;
      console.log("screenH="+screenHeight);
      if(totalh>screenHeight)
      $("#display").height(totalh);
      else
      $("#display").height(screenHeight);
}
function dimout(){
  $("#display").fadeOut();
    $("#pager").fadeIn();
}
function make_activities(){
  for(var i=0;i<13;i++){
    total_number_of_boxes++;
    console.log("Creating activity no:"+(i+1)+" Name:"+headings[i]);
  var content="<div class=\"act_box\" id=\"box_"+i+"\" onclick=\"preparedisplay("+i+")\"><img class=\"box_image\" src=\""+headings[i]+".png\"><div class=\"box_text\">"+headings[i]+"</div></div>";
  $("#content").html($("#content").html()+content);
  }
}
$(window).load(function(){
  make_activities();
  properify();
});
