function ini(){

	location.reload();
	
	//document.getElementById('main').innerHTML = '<iframe width="100%" height="1000px" src="home/index.html" frameborder="0" id="yout"></iframe>';


}

function rss(){
	
	$("#bs_chat").hide();
	$("#manual").hide();
	$("#question").hide();
	$('#rss').fadeIn();
	
}

function manual(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#question").hide();
	$('#manual').fadeIn();

}

function question(){

	$("#bs_chat").hide();
	$("#rss").hide();
	$("#manual").hide();
	$('#question').fadeIn();

}