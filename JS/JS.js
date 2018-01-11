// JavaScript Document
'use strict';
  window.onload = function ()
    {
		
	}

var chosenImg;
var img1Vis = false;
var img2Vis = false;
var img3Vis = false;


function choose(ele){
	chosenImg = ele.id;
	
	if(chosenImg == "img1")
	{
		img2.style.border="none";
		img3.style.border="none";
		img1.style.border="2px solid #FF0000";
	}
	
	if(chosenImg == "img2")
	{
		img1.style.border="none";
		img3.style.border="none";
		img2.style.border="2px solid #FF0000";	
	}
	if(chosenImg == "img3")
	{
		img1.style.border="none";
		img2.style.border="none";
		img3.style.border="2px solid #FF0000";	
	}
}

function saveImg(){
		window.localStorage.clear();
		
		var img1Pos = $("#img1").position();
		localStorage.setItem('img1Top', img1Pos.top);
		localStorage.setItem('img1Left', img1Pos.left);
		localStorage.setItem('img1Vis', img1Vis);
		
		var img2Pos = $("#img2").position();
		localStorage.setItem('img2Top', img2Pos.top);
		localStorage.setItem('img2Left', img2Pos.left);
		localStorage.setItem('img2Vis', img2Vis);
		
		var img3Pos = $("#img3").position();
		localStorage.setItem('img3Top', img3Pos.top);
		localStorage.setItem('img3Left', img3Pos.left);
		localStorage.setItem('img3Vis', img3Vis);
		
}

function loadImg(){
	img1Vis = localStorage.getItem('img1Vis');
	var img1Top = localStorage.getItem('img1Top');
	var img1Left = localStorage.getItem('img1Left');
	img1.style.top = (img1Top)+'px';
	img1.style.left = (img1Left)+'px';
	
	img2Vis = localStorage.getItem('img2Vis');
	var img2Top = localStorage.getItem('img2Top');
	var img2Left = localStorage.getItem('img2Left');
	img2.style.top = (img2Top)+'px';
	img2.style.left = (img2Left)+'px';
	
	img3Vis = localStorage.getItem('img3Vis');
	var img3Top = localStorage.getItem('img3Top');
	var img3Left = localStorage.getItem('img3Left');
	img3.style.top = (img3Top)+'px';
	img3.style.left = (img3Left)+'px';
	
	
	
	if(img1Vis == "true"){
		img1.style.visibility = "visible";
	}
	if(img2Vis == "true"){
		img2.style.visibility = "visible";
	}
	if(img3Vis == "true"){
		img3.style.visibility = "visible";
	}
	
}


function displayImg(id){
	if(id == "imgBtn1"){
		img1Vis = true;
		img1.style.visibility = "visible";
	}
	if(id == "imgBtn2"){
		img2Vis = true;
		img2.style.visibility = "visible";
	}
	if(id == "imgBtn3"){
		img3Vis = true;
		img3.style.visibility = "visible";
	}
}
	

function move(e){
	
	var x = e.clientX;
    var y = e.clientY;
	
	var image1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	
	if(chosenImg == "img1")
	{
	image1.style.left = (x-"475")+'px';
	image1.style.top = (y-"120")+'px';
	
	
	if(e.clientX < 455 || e.clientX > 855){
	  image1.style.left = ("0")+'px';
	  mouseup();
  	  }
	  if(e.clientY < 50 || e.clientY > 550){
	  image1.style.top = ("0")+'px';
	  mouseup();
  	  }
	
	}
	
		
	
	if(chosenImg == "img2")
	{
	img2.style.left = (x-"675")+'px';
	img2.style.top = (y-"120")+'px';
	
	if(e.clientX < 455 || e.clientX > 855){
	  img2.style.left = ("20")+'px';
	  mouseup();
  	  }
	  if(e.clientY < 50 || e.clientY > 550){
	  img2.style.top = ("20")+'px';
	  mouseup();
  	  }
	}
	
	
	
	if(chosenImg == "img3")
	{
	img3.style.left = (x-"625")+'px';
	img3.style.top = (y-"140")+'px';
	
	  if(e.clientX < 455 || e.clientX > 855){
	  img2.style.left = ("20")+'px';
	  mouseup();
  	  }
	  if(e.clientY < 50 || e.clientY > 550){
	  img2.style.top = ("20")+'px';
	  mouseup();
  	  }
	}
	
	image1.ondragstart = function() { return false; };
	img2.ondragstart = function() { return false; };
	img3.ondragstart = function() {return false; };
}

var dragging = false;
function mousedown(e) {
  dragging = true;
}

function mousemove(e) {
  if (dragging)
    move(e);
  else {
    // ignore mousemoves
  }
}

function mouseup(e) {
  dragging = false;
}

$('#img1').mousedown(mousedown);
$('#img2').mousedown(mousedown);
$('#img3').mousedown(mousedown);
$(window).mousemove(mousemove)
  .mouseup(mouseup);