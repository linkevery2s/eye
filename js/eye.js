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
let mes;

// カウント数
let max_c;

// 定数
let rule_count;
rule_count = day.getMonth() + 1 + day.getDate();
console.log(rule_count);

(function() {

  //挨拶文
  if (jikan >= bg_times1 && jikan < bg_times2){
  rule_count += 4;
    eyeui.message.bot({
      delay: 1500,
      content: 'おはようございます。'
    }).then(init);
}
  else if (jikan >= bg_times2 && jikan < bg_times3){
  rule_count += 12;
    eyeui.message.bot({
      delay: 1500,
      content: 'こんにちは。'
    }).then(init);
  }
  else{
  rule_count += 20;
    eyeui.message.bot({
      delay: 1500,
      content: 'こんばんは。'
    }).then(init);
  }
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
  fetch('https://linkevery2s.github.io/eye/data/output.json')
    .then(response => response.json())
    .then(data => {

      // 最大数を取得
      max_c = data.length;

      if(rule_count>max_c){
        rule_count = rule_count - max_c;

      }else{}

      let first = rule_count;console.log(first);
      let second = rule_count + 2;
      let third = rule_count + 4;
      let forth = rule_count + 6;
      let fifth = rule_count + 8;
      let sixth = rule_count + 10;

      if(second > max_c){
        second = second - max_c;
      }else {}

      if(third > max_c){
        third = third - max_c;
      }else {}

      if(forth > max_c){
        forth = forth - max_c;
      }else{}

      if(fifth > max_c){
        fifth = fifth - max_c;
      }else{}

      if(sixth > max_c){
        sixth = sixth - max_c;
      }else{}

      return eyeui.action.button({
        delay: 500,
        action: [{
            text: data[first].sub,
            value: data[first].id
          },
          {
            text: data[second].sub,
            value: data[second].id
          },
          {
            text: data[third].sub,
            value: data[third].id
          },
          {
            text: data[forth].sub,
            value: data[forth].id
          },
          {
            text: data[fifth].sub,
            value: data[fifth].id
          },
          {
            text: data[sixth].sub,
            value: data[sixth].id
          },
          {
            text: "その他",
            value: "10000"
          },
        ]

      }).then(function(res) {

        key = res.value; console.log(key);

        eyeui.message.bot({
          delay: 1000,
          content: data[key-1].contents
        }).then(function() {
          // 参考写真があったら
          if (!(data[key-1].image == "")) {

            eyeui.message.bot({
              delay: 1000,
              content: "参考画像を添付します。"
            }).then(function() {
              image_data.innerHTML = '<a href="images/post/' + data[key-1].image + '" class="intro_photo" data-lightbox="image" data-title="参考画像">参考画像</a>';
              $('.link_intro').fadeIn();
              tugi();
            });

          } else {
            tugi();
          }
});

        /*for (let i in data) {
          if (data[i].id.indexOf(key) != -1) {

            eyeui.message.bot({
              delay: 1000,
              content: data[i].contents
            }).then(function() {
              // 参考写真があったら
              if (!(data[i].image == "")) {

                eyeui.message.bot({
                  delay: 1000,
                  content: "参考画像を添付します。"
                }).then(function() {
                  image_data.innerHTML = '<a href="images/post/' + data[i].image + '" class="intro_photo" data-lightbox="image" data-title="参考画像">参考画像</a>';
                  $('.link_intro').fadeIn();
                  tugi();
                });

              } else {
                tugi();
              }

            }); /* then */

          /*}
        }*/

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

//プログラムを終了する処理
function end() {
  eyeui.message.bot({
    delay: 1000,
    content: '承知しました。<br>また聞きたいことがありましたら、左下の「ホーム」ボタンよりお尋ねください。'
  })
}
