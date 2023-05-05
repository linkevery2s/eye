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
});

let disp = x => {

  exp.innerHTML = '<iframe src="practice/experience/index.html#!' + x + '"></iframe>';

  $('.js-modal').fadeIn();
  return false;

}

let disp2 = x => {

  exp.innerHTML = '<iframe src="practice/refugeway.html#!' + x + '"></iframe>';

  $('.js-modal').fadeIn();
  return false;

}

let rss = () => {
  $('body,html').animate({
    scrollTop: $("#main").offset().top
  }, 0);
  $("#bs_chat").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#rss').fadeIn();

}

let listen = () => {

window.scrollTo({top: 0,behavior: "auto"});

  $("#bs_chat").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#share").hide();
  $('#rss').hide();
  $("#listen").fadeIn();

}

let manual = () => {
  $('body,html').animate({
    scrollTop: $("#main").offset().top
  }, 0);
  $("#bs_chat").hide();
  $("#rss").hide();
  $("#question").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#manual').fadeIn();

}

let question = () => {
  $('body,html').animate({
    scrollTop: $("#main").offset().top
  }, 0);
  $("#bs_chat").hide();
  $("#rss").hide();
  $("#manual").hide();
  $("#share").hide();
  $("#listen").hide();
  $('#question').fadeIn();

}

let share = () => {
  $('body,html').animate({
    scrollTop: $("#main").offset().top
  }, 0);
  $("#bs_chat").hide();
  $("#rss").hide();
  $("#manual").hide();
  $("#question").hide();
  $("#listen").hide();
  $('#share').fadeIn();

}

/* 高さ変更 */
let zoom_channel;
zoom_channel = 0;

let zoom = () => {
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

let home = () => {

  location.href = "./index.html";

}

let ame = () => {
  let wh = window.innerHeight;

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/ame.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let hazard = () => {
let wh = window.innerHeight;
  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/hazardmap.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let hinan = () => {
let wh = window.innerHeight;
  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/refugemap.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let level = () => {
let wh = window.innerHeight;
  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/level.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let tokai = () => {
let wh = window.innerHeight;
  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/tokai.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let aed = () => {
let wh = window.innerHeight;
  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/cardiopulmonaryresuscitation.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let shizen = () => {
  let wh = window.innerHeight;

  zoom();
  $("#zoom").hide();
  $("#main").hide();

  embed_map.innerHTML = '<iframe width="100%" height="' + wh + 'px" src ="practice/denshouhi.html" border="0"></iframe>';

  $("#embed_map").fadeIn();
  $('#back').fadeIn();

}

let back = () => {
  zoom();
  $("#back").hide();
  $("#embed_map").hide();
  $("#main").fadeIn();
  $("#zoom").fadeIn();

}
