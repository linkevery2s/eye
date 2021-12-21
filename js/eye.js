//定数定義
//朝の時間の始まり時刻
const bg_times1 = 4;

//昼の時間の始まり時刻
const bg_times2 = 12;

//夜の時間の始まり時刻
const bg_times3 = 20;

// 日にち、時刻取得
const day = new Date();
const jikan = day.getHours();
const eyeui = new BotUI('bs_chat');

(function() {

  //挨拶文
  if (jikan >= bg_times1 && jikan < bg_times2)
    eyeui.message.bot({
      delay: 1500,
      content: 'おはようございます。'
    }).then(init);

  else if (jikan >= bg_times2 && jikan < bg_times3)
    eyeui.message.bot({
      delay: 1500,
      content: 'こんにちは。'
    }).then(init);
  else
    eyeui.message.bot({
      delay: 1500,
      content: 'こんばんは。'
    }).then(init);


  function init() {
    eyeui.message.bot({
      delay: 1000,
      content: '今日は何を学びますか？'
    }).then(function() {
 
      /*eyeui.message.bot({
      	delay: 1000,
      	content: '知りたいことを色々と聞いてくださいね。'
      }).then(function(){
      });*/
    });
  }/*init()*/


})();/* function */

function test(){
	alert("aa");
}
