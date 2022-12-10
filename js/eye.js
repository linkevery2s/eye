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



(function() {

  //挨拶文
  if (jikan >= bg_times1 && jikan < bg_times2) {

    eyeui.message.bot({
      delay: 1500,
      content: 'おはようございます。'
    }).then(init);
  } else if (jikan >= bg_times2 && jikan < bg_times3) {

    eyeui.message.bot({
      delay: 1500,
      content: 'こんにちは。'
    }).then(init);
  } else {

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


let data_catch = () => {

  // 定数
  let rule_count = "";
  rule_count = day.getMonth() + 1 + day.getDate();

  if (jikan >= bg_times1 && jikan < bg_times2) {
    rule_count += 10;
  } else if (jikan >= bg_times2 && jikan < bg_times3) {
    rule_count += 25;
  } else {
    rule_count += 47;

  }
  console.log("この時間の定数は、" + rule_count);

  // データ取得
  fetch('https://linkevery2s.github.io/eye/data/output.json')
    .then(response => response.json())
    .then(data => {

      // 最大数を取得
      max_c = data.length;
      console.log("最大個数は、" + max_c);

      /* 備蓄の最初のid番号を取得する */
      let bitiku_id;
      for (let x in data) {
        if (data[x].category.indexOf("備蓄") != -1) {
          bitiku_id = data[x].id;
          break;
        }
      }

      /* 避難方法の最初のid番号を取得する */
      let hinan_id;
      for (let y in data) {
        if (data[y].category.indexOf("避難方法") != -1) {
          hinan_id = data[y].id;
          break;
        }
      }

      /* 災害体験談の最初のid番号を取得する */
      let st_id;
      for (let z in data) {
        if (data[z].category.indexOf("災害体験談") != -1) {
          st_id = data[z].id;
          break;
        }
      }

      console.log("備蓄、避難方法、災害体験談のidは、" + bitiku_id, hinan_id, st_id);

      let tisiki_count = bitiku_id - 1;

      let bitiku_count = hinan_id - bitiku_id;

      let hinan_count = st_id - hinan_id;

      let st_count = max_c - st_id + 1;

      console.log("知識、備蓄、避難方法、災害体験談の個数は、" + tisiki_count, bitiku_count, hinan_count, st_count);

      /* 防災知識 */
      let first = rule_count;

      while (first > tisiki_count) {
        first = first - tisiki_count;

      }

      let second = first + 5;

      while (second > tisiki_count) {
        second = second - tisiki_count;

      }

      console.log("防災知識のidは、" + first, second);

      /* 備蓄 */
      let bt_c = rule_count;

      while (bt_c > bitiku_count) {
        bt_c = bt_c - bitiku_count;

      }

      let third = Number(bitiku_id) + bt_c - 1;

      console.log("備蓄idは、" + third);

      /* 避難方法*/
      let hinan_c = rule_count;

      while (hinan_c > hinan_count) {
        hinan_c = hinan_c - hinan_count;

      }

      let forth = Number(hinan_id) + hinan_c - 1;

      console.log("避難方法idは、" + forth);

      /* 災害体験談 */
      let st_c = rule_count;

      while (st_c > st_count) {
        st_c = st_c - st_count;

      }

      let fifth = Number(st_id) + st_c - 1;

      console.log("災害体験談idは、" + fifth);


      return eyeui.action.button({
        delay: 500,
        action: [{
            text: data[first].sub,
            value: data[first].id
          },
          {
            text: data[second - 1].sub,
            value: data[second - 1].id
          },
          {
            /* 備蓄 */
            text: data[third - 1].sub,
            value: data[third - 1].id
          },
          {
            /* 避難方法 */
            text: data[forth - 1].sub,
            value: 9999
          },
          {
            /* 災害体験談 */
            text: "災害体験談" + data[fifth - 1].contents,
            value: 10000
          }
          /*,
                    {
                      text: "その他",'<a href="javascript:void(0)" onClick="disp()">Click!</a>'
                      value: "10000"
                    },*/
        ]

      }).then(function(res) {

        key = res.value;
        console.log(key);

        if (key == 10000) {

          eyeui.message.bot({
            delay: 1000,
            content: 'こちら↓から読むことができます。<br><a href="javascript:void(0)" onClick="disp(' + data[fifth - 1].contents + ')">災害体験談' + data[fifth - 1].contents + '</a><br>※本のように見開きで読むことができます。'
          }).then(tugi());

        } else if (key == 9999) {

          eyeui.message.bot({
            delay: 1000,
            content: 'こちら↓から読むことができます。<br><a href="javascript:void(0)" onClick="disp2(' + data[forth - 1].contents + ')">' + data[forth - 1].sub + '</a><br>※ノベルゲームとして学べます。'
          }).then(tugi());

        } else {
          eyeui.message.bot({
            delay: 1000,
            content: data[key - 1].contents
          }).then(function() {
            // 参考写真があったら
            if (!(data[key - 1].image == "")) {

              eyeui.message.bot({
                delay: 1000,
                content: "参考画像を添付します。<br>" + '<a href="images/post/' + data[key - 1].image + '" class="intro_photo" data-lightbox="image" data-title="参考画像">参考画像</a>'
              }).then(function() {
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
let tugi = () => {

  eyeui.message.bot({
    delay: 1500,
    content: '他に知りたいことはありますか？'
  }).then(function() {
    return eyeui.action.button({
      delay: 1000,
      action: [{
        text: 'はい',
        value: true
      }, {
        text: 'いいえ',
        value: false
      }]
    });
  }).then(function(res) {
    res.value ? init() : end();
  });

}

//プログラムを終了する処理
let end = () => {
  eyeui.message.bot({
    delay: 1000,
    content: '承知しました。<br>また聞きたいことがありましたら、左下の「ホーム」ボタンよりお尋ねください。'
  })
}
