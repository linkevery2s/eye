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
	$('#main').css('padding-bottom','20px');
	zoom_channel = 1;
	}else{
	$('#header').fadeIn();
	$('#footer').fadeIn();
	$('#main').css('padding-top','100px');
	$('#main').css('padding-bottom','140px');
	zoom_channel = 0;
	}
}

function listen(){
alert(window.outerHeight);

	$("#rss").hide();
	$("#manual").hide();
	$("#question").hide();
	$("#practice").hide();

	$('#bs_chat').fadeIn();
	document.getElementById('bs_chat').innerHTML = '<iframe width="100%" height = "600px" src="home/index.html" frameborder="no" id="yout"></iframe>';

}
