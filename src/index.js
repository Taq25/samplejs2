/**
 * const, let等の変数宣言
 */
// var val1 = '123456';
// console.log(val1);

// // var変数は上書き可能
// val1 = '9876';
// console.log(val1);

// // var変数は再宣言可能
// var val1 = 'var再宣言';
// console.log(val1);

// let val1 = "let変数";
// console.log(val1);

// val1 = "let変数は上書き可能";
// console.log(val1);

// const HIU = {
//  name: 'aaaa',
//  age: 12345,
// };
// console.log(HIU);

// HIU.name = 'bbbbb';
// console.log(HIU);
// HIU.address = 'okayama';
// console.log(HIU);

// const animals =['dog','cat'];
// console.log(animals[0]);

/**
 * テンプレート文字列
 */
//const name = 'はざき';
//const age = 25;
// 私の名前ははざきです。年齢は25です。と出力したい
// 従来のやり方
//const introduction1 = '私の名前は'+ name +'です。年齢は'+age+'です。';
//console.log(introduction1);
//const introduction2 = `私の名前は${name}です。年齢は${age}です。`;
//console.log(introduction2);

/**
 * アロー関数
 */
// 従来の関数
// function func(str){
//   return str;
// };
// const func2 = function(){
//   return 'Hello World';
// };
// console.log(func(12));
// console.log(func2());
// // アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3('Good evening'));
// const func4 = (str) => str;
// console.log(func4(12));
// const func5 = (num1, num2) =>num1 + num2;
// console.log(func5(1,2));

//const myProfile =  {
//name: 'Takuya',
//age: 25,
//};
//const messe = `私の名前は${myProfile.name}です。年齢は、${myProfile.age}です。`;
//console.log(messe);

//const {name, age} = myProfile;
//const messe2 = `私の名前は${name}です。年齢は、${age}です。`;
//console.log(messe2);

//const myProfile = ['Takuya', 25];
//const messe = `私の名前は${myProfile[0]}です。年齢は、${myProfile[1]}です。`;
//console.log(messe);

//const [name, age] = myProfile;
//const messe2 = `私の名前は${name}です。年齢は、${age}です。`;
//console.log(messe2);

// const sayHello = (name = 'Guest') => console.log(`Welcome!! ${name}!!`);
// sayHello('Takuya');
// sayHello();

/** スプレッド構文 */
// 配列の展開
//const samplearray = [3,4];
// console.log(samplearray);
// console.log(...samplearray);
// const sumNum = (num1, num2) => console.log(num1 + num2);
// //sumNum(samplearray[0], samplearray[1]);
// sumNum(...samplearray);
// const nums = [1,2,3,4,5];
// const [num1,num2,...array1] = nums;
// console.log(num1);
// console.log(array1);

// const array2 = [10, 20];
// const array3 = [30, 40];
// const array4 = [...array2];
// const array5 = [...array2, ...array3];
// console.log(array4);
// console.log(array5);

// array4[0] = 100;
// console.log(array4);
// console.log(array2);

/**
 * mapやfilterによる配列処理
 */
const members = ["Hazaki", "Tanaka", "Yamamoto"];
// forを利用した例
// for (let index = 0; index < members.length; index++) {
//   console.log(`${index+1}番目は${members[index]}です。`);
// }

// const namearr1 = members.map((name)=>{
//   return name;
// })
// console.log(namearr1);

// members.map((name, index) => console.log(`${index +1}番目は${name}です。`));

// const numarray = [1,2,3,4,5];
// const newNums = numarray.filter((num) => {
//   return num % 2 ===1;
// })
// console.log(newNums);
// const newnames = members.map((name)=>{
//   if (name === 'Hazaki'){
//     return name;
//   } else {
//     return `Mr.${name}`;
//   }
// })
// console.log(newnames);
/**
 * 三項演算子
 */
// ある条件?　条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 0 ? 'true':'false'
// console.log(val1);

// const num = 13000000;
// const formattedNum = typeof num === 'number' ? num.toLocaleString(): 'Please input numerical values';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100
    ? "The sum is over 100!!"
    : "Still within the permissible range";
};
console.log(checkSum(12, 20));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// ||は左側がfalseなら右側を返す。
// const num = 1233;
// const fee = num || "金額未設定";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num = 100;
const fee = num && "やっほー";
console.log(fee);
