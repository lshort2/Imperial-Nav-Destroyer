//Initialize all ship sounds in their respective variables
var sound_fire = new Audio();
sound_fire.src = "audio/ship-laser.mp3";
var sound_hit = new Audio();
sound_hit.src = "./audio/explosion.mp3";

var HIT_DELAY = 2000;//Amount of time required to complete hit animation, before changing page
console.log("File is loaded.");
//var ship = document.getElementById("imperialNavDestroyer");
//ship.setAttribute("style", "position:fixed; top:80%; left:20px; width: 360px;");
var ship = $("#imperialNavDestroyer");
ship.css({"position":"fixed", "top":"79%", "left":"20px", "width": "360px", "z-index": "200"});

var annoying = $("#markerCursor");
annoying.css({"position":"fixed", "top":"49%", "left":"40px", "width": "260px", "z-index": "300"});


function hit(link, hitLocation) {
  sound_hit.play();
  setTimeout(function(){window.location.href=link}, HIT_DELAY);
}


$(document).mousemove(function(e){
  //Dummy ball follows pointer
  $("#ball").css({left:e.pageX-150, top:e.pageY-150});

  //Calculate x,y of ship itself
  ////var shipoffset = ship.offset();
  ////var ship_x = shipoffset.left;
  ////var ship_y = shipoffset.top;
  ////ship_center_x = ship_x + 180;
  ////ship_center_y = ship_y + 101;
  /*
  */
  var top_shipOffset = 111;
  var left_shipOffset = 110;
  var ship_center_x = ship.offset().left+ship.width()/2;
  var ship_center_y = ship.offset().top+ship.height()/2;

  //Calculate angle for ship to be pointed
  var angle = Math.atan2(e.pageX- ship_center_x,- (e.pageY- ship_center_y) )*(180/Math.PI);
  angle -= 64;
  ship.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
  ship.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
  ship.css({ 'transform': 'rotate(' + angle + 'deg)'});
  ship.css({ 'transform-origin': left_shipOffset + top_shipOffset});
  ship.css({ '-ms-transform-origin': left_shipOffset + top_shipOffset});
  //ship.css({ 'transform-origin': left_shipOffset + top_shipOffset});
  //ship.css({ '-ms-transform-origin': left_shipOffset + top_shipOffset});
  /*
  ship.css({ 'transform-origin': ship.width()/2 + ship.height()/2});
  ship.css({ '-ms-transform-origin': ship.width()/2 + ship.height()/2});
  console.log("ship_x", ship_x);
  console.log("ship_y", ship_y);
  console.log("e.clientX", e.clientX);
  console.log("e.clientY", e.clientY);
  var top_ship2Offset = 74;
  var left_ship2Offset = 60;
  ship2_center_x = ship2.offset().left+ship2.width()/2+left_ship2Offset;
  ship2_center_y = ship2.offset().top+ship2.height()/2+top_ship2Offset;

  var angle2 = Math.atan2(e.pageX- ship2_center_x,- (e.pageY- ship2_center_y) )*(180/Math.PI);
  angle2 -= 90;
  ship2.css({ "-webkit-transform": 'rotate(' + angle2 + 'deg)'});    
  ship2.css({ '-moz-transform': 'rotate(' + angle2 + 'deg)'});
  ship2.css({ 'transform': 'rotate(' + angle2 + 'deg)'});
  ship2.css({ 'transform-origin':  left_ship2Offset + ' ' + top_ship2Offset});
  ship2.css({ '-ms-transform-origin': left_ship2Offset + ' ' + top_ship2Offset});
  */
});
