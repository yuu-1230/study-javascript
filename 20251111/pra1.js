//演算
console.log(1 + 1);

//変数 constは再代入不可能。let再代入可能。
//varは現在は主流でない。
const foo = 1;
console.log(foo);

const colorDark = "#000";
if (new Date().getHours() >= 0) {
  document.body.style.backgroundColor = colorDark;
}
