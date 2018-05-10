var canvasDiv = document.getElementById("canvasDiv");
var canvas = document.createElement("canvas");
canvas.setAttribute("width", 900);
canvas.setAttribute("height", 500);
canvas.setAttribute("id", "canvas");
canvasDiv.appendChild(canvas);

var context = canvas.getContext("2d");
var strokeColor = "black";

$("#canvas").mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$("#canvas").mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$("#canvas").mouseup(function(e){
  paint = false;
});

$("#canvas").mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var colors = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  colors.push(strokeColor);
  clickDrag.push(dragging);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.color = "black";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    context.strokeStyle = colors[i];
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}


$(".reloader").click(function() {
  window.location.reload(true);
})

var faces = ["https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2F004c8ae5c2e8f3d9277567b99d97d0aa0cf8f912a7c2ebbd8d9f5493f4db.jpeg?1525221711601", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fsmiley.jpg?1525223399941", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fblue-red-checkered-flag-270-p_1.jpg?1525223400109", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fmaxresdefault.jpg?1525223400259", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fdotsss.jpg?1525392409745", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fdots.jpg?1525392409871", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fbikeman.jpg?1525891174454", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fbikeman2.jpg?1525891174310", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fcc6.jpg?1525899151857", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Ftess.png?1525901242627", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Fnew-tess.png?1525901242885", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2Flincoln_saves_who__blank_meme_by_funnytime77-da5pjga.png?1525901242784", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2F4spl1.jpg?1525979766183", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2F139.png?1525979881395", "https://cdn.glitch.com/dc5d5ba9-9f09-4bbd-b81b-26166cf65163%2F15-trump-pepe.w1200.h630.jpg?1525980114414"];

var myFace = faces[Math.floor(Math.random() * faces.length)];

$("canvas").css("background-image", "url(" + myFace + ")");

$(".black").click(function() {
  strokeColor = "black";
  $(".black").animate({left: '20px'}, "slow");
  $(".blue").css("left","80px");
  $(".yellow").css("left","80px");
  $(".red").css("left","80px");
})

$(".red").click(function() {
  strokeColor = "#df4b26";
  $(".red").animate({left: '20px'}, "slow");
  $(".blue").css("left","80px");
  $(".yellow").css("left","80px");
  $(".black").css("left","80px");
})

$(".blue").click(function() {
  strokeColor = "blue";
  $(".blue").animate({left: '20px'}, "slow");
  $(".red").css("left","80px");
  $(".yellow").css("left","80px");
  $(".black").css("left","80px");
})

$(".yellow").click(function() {
  strokeColor = "#fff700";
  $(".yellow").animate({left: '20px'}, "slow");
  $(".blue").css("left","80px");
  $(".red").css("left","80px");
  $(".black").css("left","80px");
})

// $(document).ready(function(){
//         var canvas = document.getElementById("#canvasDiv");
//         var oCtx = canvas.getContext("2d");
//         oCtx.beginPath();
//         oCtx.moveTo(0,0);
//         oCtx.lineTo(300,150);
//         oCtx.stroke();

//         $(".save").on('click', function(){
//             // opens dialog but location doesnt change due to SaveAs Dialog
//             document.location.href = '/script.php?image=' + canvas.toDataURL();
//         });
//     });

$(".save").click(function() {
   window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
});



