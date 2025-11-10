//組み込み関数
console.log(parseInt("8"));

console.log(Math.PI);

console.log(Math.ceil(5.3)); //切り上げ

//ブラウザAPI
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(document); //domtree

setTimeout(function () {
  alert("Hello");
}, 3000); //第二引数後に実行
