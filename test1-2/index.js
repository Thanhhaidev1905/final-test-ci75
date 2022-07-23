// bài 1
let name_array = [1, 2, 3, 2, -4, 5];
const tichLonNhat = () => {
  let arr = [];

  for (var i = 0; i < name_array.length - 1; i++) {
    let mul = name_array[i] * name_array[i + 1];
    arr.push(mul);
  }
  let max_val = arr.reduce(function (accumulator, element) {
    return accumulator > element ? accumulator : element;
  });

  document.write("bai 1"+"<br />");
  document.write(`mảng tich ${arr}`);
  document.write("<br/>");

  document.write(`tích lớn nhất cặp số liền kề : ${max_val} ` + "<br />");
};
tichLonNhat();

// bài 2

let arrWeight = [60, 40, 55, 75, 64];
const tongCanNangHaiTeam = () => {
  let temOne = [];
  let temTwo = [];
  let both = [];
  for (let i = 0; i < arrWeight.length; i++) {
    if (i % 2 == 0) {
      temOne.push(arrWeight[i]);
    } else {
      temTwo.push(arrWeight[i]);
    }
  }
  document.write("bai 2"+"<br />");

document.write("team 1: "+temOne, " , Team 2 :" + temTwo + "<br />");

  let sumWeightOne = temOne.reduce(function (accumulator, element) {
    return accumulator + element;
  });
  let sumWeightTwo = temTwo.reduce(function (accumulator, element) {
    return accumulator + element;
  });

  both.push(sumWeightOne,sumWeightTwo);
  document.write("Tổng cân nặng của từng team: "+both)
};

tongCanNangHaiTeam();


