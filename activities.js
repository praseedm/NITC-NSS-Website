var total_number_of_boxes=0;

function properify(){
  var screenWidth=$(window).width();
  var number_of_boxes=Math.floor(screenWidth/430);
  var left_space=screenWidth%(number_of_boxes*430);
  console.log(screenWidth+" "+left_space);
  document.getElementById("content").style.paddingLeft=((left_space-4)/2)+"px";
  document.getElementById("content").style.height=(Math.ceil(total_number_of_boxes/(number_of_boxes))*480)+50;
}

var headings=["Paathshala","Agriculture","Cleaning","House Construction","Aavishkar","Sneharagam","NSS Annual Camp"];
var matter=["Paathshala is an initiative begun by college students which aims at equipping the underprivileged children of the society with basic education and skills so that they would be better prepared to step out into the world on their own and conquer it. Under the initiative, every weekend, children from the colony of construction workers on campus are picked up in the morning, taken to classrooms where they were taught basic reading, writing and math, and then brought back to their homes by the afternoon, sometimes after a snack.<br><br> The initiative was taken up by the students of Unit 3.<br><br>Volunteers of NSS also engage regular classes during weekends for higher secondary students of nearby schools in science subjects and mathematics. The classes are engaged in such a way that it is also a coaching for the entrance examinations for higher studies. A lot of economically underprivileged students living in the vicinity of NIT Calicut campus make use of it.<br><br>As Sydney J. Harris once put it,<br><br><i>\"The whole purpose of education is to turn mirrors into windows\"</i><br><br>Paathshala is a window of hope.",
"As part of NSS activities, the students from all units engage themselves in agricultural activities such as ploughing the land, planting trees and vegetables in the otherwise barren areas near the Department of Architecture. <br><br>The Department of Agriculture of the Government of Kerala had sanctioned Rs 40,000/- to the NSS Cell of NITC to undertake vegetable cultivation in the campus under the Vegetable Development Scheme 2014-15.<br><br>The sweat and labour of the students over the weeks have translated into small tapioca, vegetable and banana farms.",
"The students, as part of their duties to the institution they study and live in, worked together in cleaning the campus, clearing the roads by plucking wild grass and creating channels to prevent rain water from pooling at a place, thus improving sanitation. <br><br>This work came under national importance under Swachh Bharat Abhiyan campaign (Clean Indian Mission), a national campaign by the Government of India, to clean the streets, roads and infrastructure of the country",
"In a socially developed society, every citizen is entitled to secure and placid living conditions. A responsible community ought to ensure that fellow beings also have access to these basic amenities. Also it becomes morally imperative if our neighbors face such a plight. <br><br>We introduce to you Sreemathi,a resident of Eagle Plantation colony Company Mukk, who ails from breast cancer. This ill-fated woman was abandoned by her husband and has to provide for her 16 year old daughter and aging mother.<br><br>To add to her miseries, her house lacks proper security and sanitation. NITC, NSS Cell has decided to lend her a hand by constructing a 500 sq ft. house free of cost for her and her family.<br><br>The cost is estimated to be about Rs. 5.5 lakhs. The construction is almost over and the family has started living there.<br><br>As social beings who have at some point relied on the gifts that society has given us, we are immensely indebted to the society and we hope to pay it back by working towards overall social empowerment. ",
"Aavishkaar is a social initiative that falls under the umbrella of Tathva, NITC's technical fest. It is one of the most important and socially relevant programmes in NITC. Students involved in the programme receive NSS credits for the socially relevant activities they carry out. These pursuits are fuelled by their passion to give back to the society that has provided them with abundant opportunities.<br><br>As part of this scheme, students endeavoured to power an entire village in Chaliyar Panchayat, Malapuram using solar energy.<br><br>The village is situated in a dense forest, which meant that conventional means of power distribution were impractical. The entire process of designing and assembling of the project in the village was undertaken by the participants in the Aavishkaar initiative. <br><br>Other projects undertaken under Aavishkaar included an occupational training programme for a select group of disabled people in association with NEST Koyilandi, the creation of multi-functional wheelchair and the electrification of Noolpuzha Gram Panchayat, Chetyalathoor, and Wayanad.",
"The Joy of bringing a smile on a person's face is something that cannot be merely expressed by words. It is something everyone has to experience. <br><br>Sneharagam, sponsored by NSS, is such an experience which is more than just a social initiative, where we share our joy and happiness with the differently-abled and build a stage to showcase what they have to offer. <br><br>The event that happens every year as part of the college's Annual Cultural Fest – Ragam did not fail to mesmerize the audience by showcasing the talent and charisma of the differently-abled in our society.<br><br>The programme, held on 16th March, was inaugurated by film star, Jagadish.  This was followed by 4 hours of scintillating performances by the students of various schools for the differently-abled. Hundreds of students volunteered for the event in assisting the children and their parents and also distributing food items and cheering participants.<br><br>This was accompanied by a book donation drive where hundreds of people contributed their books for the children.",
"The combined Annual Camp of all the four units of NSS under the NIT cell was held from the 27th of December 2015 to 2nd January 2015 at Govt. L.P.School,Muthanga,Noolpuzha Village Panchayath,Wayanad.<br><br>The camp was an immense success with the volunteers engaging in activities such as whitewashing houses, levelling roads, ploughing grounds for farming, digging and clearing trenches, collecting firewood from forest, agricultural survey and spreading awareness about education, among tribal communities .<br><br>The volunteers also conducted interactive sessions with students and the locals trying to get a deeper insight into their lives, their worries and their smiles, trying to touch their lives and make a difference.",
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
  for(var i=0;i<7;i++){
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
