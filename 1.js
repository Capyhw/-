const Basket = {
  onion: 1,
  ginger: 2,
  garlic: 3,
};

const getVegetableNum = async (veg) => {
  console.log(Basket[veg]);
};

let queue = [];
const start = async () => {
  console.log("Start");
  const arr = ["onion", "ginger", "garlic"];
  for (let i in arr) {
    const veg = arr[i];
    queue.push(getVegetableNum(veg));
  }
  await Promise.all(queue);
};

start();
