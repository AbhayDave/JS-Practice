function customMap(callback) {
  let resultArray = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }

  return resultArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.customMap = customMap;

let res = arr.customMap((i) => i * 2);

console.log(res);
