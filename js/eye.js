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
	

document.getElementById('sns').innerHTML = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="EYE -防災アシスタント" data-url="https://bseye17.netlify.app/index.html" data-lang="ja" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><div class="fb-like" data-href="https://bseye17.netlify.app/index.html" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></div>';


	});

  });


  }



})();
