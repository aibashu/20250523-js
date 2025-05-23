$(function () {
  // jQueryを記述
  //デフォルト（引数なし）
 //  $("p").fadeOut();

  // 速度指定（引数あり）
  //  $("p").fadeOut(1100);

  // 終了後の処理を指定
 $("p").fadeOutOut(function () {
    alert(フェードアウトしました)
  })
});