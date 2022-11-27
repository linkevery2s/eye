//定数定義
//朝の時間の始まり時刻
const bg_times1 = 4;

//昼の時間の始まり時刻
const bg_times2 = 11;

//夜の時間の始まり時刻
const bg_times3 = 18;

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

  });
} /*init()*/


function data_catch() {

  // データ取得
  fetch('https://linkevery2s.github.io/eye/data/output.json')
    .then(response => response.json())
    .then(data => {

      // 最大数を取得
      max_c = data.length;
      console.log(max_c);

      if(rule_count>max_c){
        rule_count = rule_count - max_c;

      }else{}

      let first = rule_count;
      let second = rule_count + 5;
      let third = rule_count + 10;
      let forth = rule_count + 15;
      let fifth = 3;

      console.log(first,second,third,forth,fifth);

      if(second >= max_c){
        second = second - max_c;
      }else {}

      /* 備蓄の最初のid番号を取得する */
      let bitiku_id;
      for(let j in data){
        if(data[j].category.indexOf("備蓄") != -1) {
          bitiku_id = data[j].id;
          break;
        }
      }

      console.log(bitiku_id);




      console.log(first,second);

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
            text: "災害体験談" + fifth,
            value: 10000
          }/*,
          {
            text: "その他",'<a href="javascript:void(0)" onClick="disp()">Click!</a>'
            value: "10000"
          },*/
        ]

      }).then(function(res) {

        key = res.value; console.log(key);

        if(key == 10000){

          eyeui.message.bot({
            delay: 1000,
            content: 'こちら↓から読むことができます。<br><a href="javascript:void(0)" onClick="disp(' + fifth + ')">災害体験談' + fifth +'</a>'
          }).then(tugi());

        }
        else{
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
              //image_g.innerHTML = '<img src = "images/post/' + data[key-1].image + '" width="100%">';
              //image_data.innerHTML = '<a class="js-modal-open" href="#">参考画像</a>';
              //image_g.innerHTML = '<img src = "images/post/' + data[key-1].image + '" width="100%">';
              $('.link_intro').fadeIn();
              tugi();
            });

          } else {
            tugi();
          }
        });
      }

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
