function rss(){

	$("#bs_chat").hide();
	$("#manual").hide();
	$("#question").hide();
  $("#share").hide();
	$('#rss').fadeIn();

}

function manual(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#question").hide();
  $("#share").hide();
	$('#manual').fadeIn();

}

function question(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#manual").hide();
  $("#share").hide();
	$('#question').fadeIn();

}

function share(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#manual").hide();
  $("#question").hide();
	$('#share').fadeIn();

}

/* 高さ変更 */
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

/*function listen(){
var ifh = window.outerHeight * 0.75;

	$("#rss").hide();
	$("#manual").hide();
	$("#question").hide();
	$("#share").hide();

	$('#bs_chat').fadeIn();
	document.getElementById('bs_chat').innerHTML = '<iframe width="100%" height = "' + ifh + 'px" src="home/index.html" frameborder="no" id="yout"></iframe>';

}*/

function home(){

	$("#manual").hide();
	$("#rss").hide();
	$("#question").hide();
  $("#share").hide();
	$('#bs_chat').fadeIn();

}
