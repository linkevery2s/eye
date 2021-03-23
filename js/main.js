function rss(){
	
	$("#bs_chat").hide();
	$("#manual").hide();
	$("#question").hide();
$("#practice").hide();
	$('#rss').fadeIn();
	
}

function manual(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#question").hide();
$("#practice").hide();
	$('#manual').fadeIn();

}

function question(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#manual").hide();
$("#practice").hide();
	$('#question').fadeIn();

}

function practice(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#manual").hide();
$("#question").hide();
	$('#practice').fadeIn();

}

/* 保留 */
var zoom_channel;
zoom_channel = 0;
function zoom(){
	if(zoom_channel == 0){
	$('#header').fadeOut();
	$('#footer').fadeOut();
	$('#main').css('padding-top','10px');
	$('#main').css('padding-bottom','0');
	zoom_channel = 1;
	}else{
	$('#header').fadeIn();
	$('#footer').fadeIn();
	$('#main').css('padding-top','100px');
	$('#main').css('padding-bottom','100px');
	zoom_channel = 0;
	}
}

function listen(){

	$("#rss").hide();
	$("#manual").hide();
	$("#question").hide();
	$("#practice").hide();

	$('#bs_chat').fadeIn();
	document.getElementById('bs_chat').innerHTML = '<iframe width="100%" height="500px" src="home/index.html" frameborder="0" id="yout"></iframe>';

}

function ini(){



}
