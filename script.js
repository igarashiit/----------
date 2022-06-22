$('#btn').on('click', function(){
$('body').toggleClass('open') //★
//$('要素#id名'これでjQueryのオブジェクトになる) 
//イベントリスナーオン【.on'イベント名'　function(){★})】
//★ボディにオープンというクラスを取ったり付けたりする
//$('jQeryのオブジェクト')

//console.log( $('body').hasClass('open'))
//↑コンソール：ボディ要素に、hasClass＝クラス持ってるか？(オープンというクラスを持っている)

if( $('body').hasClass('open')) {
  $('#btn i')
.removeClass('ri-menu-line')
.addClass('ri-close-line')
} 
else {
  $('#btn i')
  .removeClass('ri-close-line')
  .addClass('ri-menu-line')
}
//if　もしボディにオープンというクラスがあったら
//btnの中のi　の元々のクラス(ri-menu-line)を消す
//そして、(ri-close-line)を出す　※メソッドチェーン

}) 

