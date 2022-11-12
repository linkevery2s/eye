$(function() {
  //モーダルウィンドウ
  $('.js-modal-open').on('click', function() {
    $('.js-modal').fadeIn();
    return false;
  });
  $('.js-modal-close').on('click', function() {
    $('.js-modal').fadeOut();
    return false;
  });
  //リンク集ウィンドウ表示
  $('.link_intro-open').on('click', function() {
    $('.link_intro').fadeIn();
    return false;
  });
  $('.link_intro-close').on('click', function() {
    $('.link_intro').fadeOut();
    return false;
  });

});

function disp() {

  $('.js-modal').fadeIn();
  return false;

}

function rss() {

  $("#bs_chat").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#rss').fadeIn();

}

function listen() {
  $("#bs_chat").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#share").hide();
  $('#rss').hide();
  $("#listen").fadeIn();

}

function manual() {

  $("#bs_chat").hide();
  $("#rss").hide();
  $("#question").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#manual').fadeIn();

}

function question() {

  $("#bs_chat").hide();
  $("#rss").hide();
  $("#manual").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#question').fadeIn();

}

function share() {

  $("#bs_chat").hide();
  $("#rss").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#listen").hide();
  $('#share').fadeIn();

}

/* 高さ変更 */
var zoom_channel;
zoom_channel = 0;

function zoom() {
  if (zoom_channel == 0) {
    $('#header').fadeOut();
    $('#footer').fadeOut();
    $('#main').css('padding-top', '10px');
    $('#main').css('padding-bottom', '20px');
    zoom_channel = 1;
  } else {
    $('#header').fadeIn();
    $('#footer').fadeIn();
    $('#main').css('padding-top', '100px');
    $('#main').css('padding-bottom', '140px');
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

function home() {

  location.href = "./index.html";
  /*
  	$("#manual").hide();
  	$("#rss").hide();
  	$("#question").hide();
    $("#share").hide();
  	$('#bs_chat').fadeIn();
  */
}

function ame() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/ame.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();
  //ele.innerHTML = '<iframe width="100%" height="580px" src="practice/ame.html"></iframe>';

}

function hazard() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/hazardmap.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

function hinan() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/refugemap.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

function level() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/level.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

function tokai() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/tokai.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

function aed() {

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  document.getElementById("embed_map").innerHTML = '<iframe width="100%" height="550px" src="practice/aed.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

function back() {
  zoom();
  $("#back").hide();
  $("#embed_map").hide();
  $("#main").fadeIn();


}
