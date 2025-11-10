//演算
console.log(1 + 1);

//文字列の出力
console.log("hello" + "world");

//変数 constは再代入不可能。let再代入可能。
//varは現在は主流でない。
const foo = 1;
console.log(foo);

//練習１
const colorDark = "#000";
const colorWhite = "#fff";
if (new Date().getHours() >= 18 || new Date().getHours() <= 5) {
  document.body.style.backgroundColor = colorDark;
} else {
  document.body.style.backgroundColor = colorWhite;
}

//配列
const array = ["x", "y", "z"];
console.log(array[2]);

//for文
const questions = [
  "現在の西暦は？",
  "現在の総理大臣は？",
  "世界で人口が一番多い国は？",
];
for (let index = 0; index < questions.length; index++) {
  console.log(questions[index]);
}
