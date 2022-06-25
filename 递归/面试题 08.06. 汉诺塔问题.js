/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
//如果n不等于1，我们要分3步，
// 1.先把n-1个圆盘从A借助C成功的移动到B
// 2.然后再把第n个圆盘从A移动到C
// 3.最后再把n-1个圆盘从B借助A成功的移动到C。

const hanota = (A, B, C) => {
  const n = A.length;
  // 将A中的n个移动到C
  const move = (n, A, B, C) => {
    if (n === 1) {
      C.push(A.pop());
      return;
    }
    // 将A中的n-1个移动到B
    move(n - 1, A, C, B);
    // 将A剩余的一个移动到C
    C.push(A.pop());
    // 将B中的n-1个移动到C
    move(n - 1, B, A, C);
  };
  move(n, A, B, C);
};

let A = [3, 2, 1, 0],
  B = [],
  C = [];
hanota(A, B, C);
console.log(A, B, C);
