let arr = [];
const makeArr = (numbers, length) => {
  const result = [];
  const data = numbers.split(",");

  for (var i = 0; i < data.length; i++) data[i] = +data[i];

  let curr,
    total = length - data.length;

  if (total)
    while (--total) {
      curr = Math.floor(Math.random() * (total + 1));
      result.push(curr);
    }
  return (arr = data.concat(result));
};

const searchArrValIndex = (numbers, arr) => {
  const data = numbers.split(",");

  for (var i = 0; i < data.length; i++) data[i] = +data[i];

  const dataArr = arr.filter((val) => val === data);
  const indexArr = arr.findIndex((val) => val === data);
};

const searchIndexArr = (numbers, arr) => {
  const data = numbers.split(",");

  for (var i = 0; i < data.length; i++) data[i] = +data[i];

  const indexArr = arr.findIndex((val) => val === data);
};

module.exports = { makeArr, searchArrValIndex, searchIndexArr };
