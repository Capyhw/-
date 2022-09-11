var singleNumber = function (nums) {
  let xorsum = 0;

  for (const num of nums) {
    xorsum ^= num;
  }
  let type1 = 0,
    type2;
  //找到最低有效位对应的值
  //比如3=>011  5=>101  3^5=6=>110
  //6&(-6)=>010
  //所以lsb=2=>010  说明3和5在第一位这位上不同
  const lsb = xorsum & -xorsum;
  for (const num of nums) {
    //找出nums中和010一样,在第一位这位上为1的num
    if (num & lsb) {
      type1 ^= num;
    }
  }
  //   xorsum=3^5
  //   type1=3/5 那么type2=xorsum ^ type1
  type2 = xorsum ^ type1;
  return [type1, type2];
};

singleNumber([1, 2, 1, 3, 2, 5]);
