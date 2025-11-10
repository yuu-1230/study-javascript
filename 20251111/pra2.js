//条件文 == と === は違う。厳密な比較は後者。
let isLogin = true;
if (isLogin === false) {
  //   alert("ログインしてください");
} else {
  console.log("ログイン中");
}
//↓
if (!isLogin) {
  //   alert("ログインしてください");
} else {
  console.log("ログイン中");
}

//---------------------------------------
//関数
const timeA = 18;
const timeB = 5;
const colorDark = "#000";
const colorWhite = "#fff";

const changeDarkMode = (time) => {
  if (new Date().getHours() >= timeA || new Date().getHours() <= timeB) {
    document.body.style.backgroundColor = colorDark;
  } else {
    document.body.style.backgroundColor = colorWhite;
  }
};
changeDarkMode();

//コールバック関数
const foo = (callback) => {
  console.log("Good");
  callback();
};
const bar = () => {
  console.log("morning!");
};
foo(bar);

//オブジェクト
const snsUser = {
  id: 1,
  userName: "Taro",
  gender: "male",
  like: function () {
    console.log("liked!");
  },
  post: function () {
    console.log("posted");
  },
};
console.log(snsUser.id);

//this
const snsUserA = {
  id: 1,
  userName: "Taro",
  post: function (contents) {
    return contents + "を投稿しました。by" + this.userName;
  },
};
console.log(snsUserA.post("プログラミングなう。"));
