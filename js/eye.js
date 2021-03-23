(function () {

	var eyeui = new BotUI('bs_chat');

  //初期メッセージ
  eyeui.message.bot({

delay: 1000,
    content: 'EYEです。'
  }).then(init);

  function init() {
    eyeui.message.bot({
      delay: 1000,
      content: '私は、防災について学べるチャットボットです。'
    }).then(function() {

	eyeui.message.bot({
		delay: 1000,
		content: '知りたいことを色々と聞いてくださいね。'
	}).then(function(){
	
	$('#sns').css('display','block');
	});

  });


  }



})();
