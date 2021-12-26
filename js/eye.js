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

// キーワード
let key;

// カウント数
let i;
let max_c;

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

})(); /* function */

function init() {
  eyeui.message.bot({
    delay: 1000,
    content: '今日は何を学びますか？'
  }).then(function() {

    data_catch();

    /*eyeui.message.bot({
      delay: 1000,
      content: '知りたいことを色々と聞いてくださいね。'
    }).then(function(){
    });*/

  });
} /*init()*/


function data_catch() {

  // データ取得
  fetch('https://bseye17.netlify.app/data/output.json')
    .then(response => response.json())
    .then(data => {

      // 最大数を取得
      max_c = data.length;


      return eyeui.action.button({
        delay: 500,
        action: [{
            text: data[0].sub,
            value: "0"
          },
          {
            text: data[1].sub,
            value: "1"
          },
          {
            text: data[2].sub,
            value: "2"
          },
          {
            text: data[3].sub,
            value: "3"
          },
          {
            text: "その他",
            value: "10000"
          },
        ]

      }).then(function(res) {

        key = res.value;

        eyeui.message.bot({
          delay: 1000,
          content: data[key].contents
        }).then(function() {
          // 参考写真があったら
          if (!(data[key].image == "")) {

            eyeui.message.bot({
              delay: 1000,
              content: "参考画像を添付します。"
            }).then(function() {
              image_data.innerHTML = '<a href="images/post/' + data[3].image + '" class="intro_photo" data-lightbox="image" data-title="参考画像">参考画像</a>';
              $('.link_intro').fadeIn();
              tugi();
            });

          } else {
            tugi();
          }

        });

      }); /* res */

    });

} /* data_catch() */

/* 質問をループさせる */
function tugi() {

  eyeui.message.bot({
    delay: 1500,
    content: '他に知りたいことはありますか？'
  }).then(function() {
    return eyeui.action.button({
      delay: 1000,
      action: [{
        icon: 'circle-thin',
        text: 'はい',
        value: true
      }, {
        icon: 'close',
        text: 'いいえ',
        value: false
      }]
    });
  }).then(function(res) {
    res.value ? init() : end();
  });

}
