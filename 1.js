function deepClone(...obj) {
  let copy = [];
  for (let item of obj) {
    let res = item instanceof Array ? [] : {};
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        res[key] =
          typeof item[key] === "object" ? deepClone(item[key]) : item[key];
      }
    }
    copy.push(res);
  }
  return copy;
}

console.log(
  deepClone(
    {
      a: 1,
      b: {
        c: 2,
        d: ["a", "b", "c"],
      },
    },
    {
      a: 2,
      b: {
        c: 2,
        d: ["a", "b", "c"],
      },
    }
  )
);
