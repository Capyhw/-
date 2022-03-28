class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}
	//插入元素
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	//返回栈的大小
	size() {
		return this.count;
	}
	//判断是否为空栈
	isEmpty() {
		return this.count === 0;
	}
	//弹出元素
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}
	//返回栈顶元素
	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
	//清空栈
	clear() {
		this.count = 0;
		this.items = {};
	}
	//toString
	toString() {
		if (this.isEmpty()) {
			return "";
		}
		let objString = `${this.items[0]}`
		for (let i = 1; i < this.count; i++) {
			objString = `${objString},${this.items[i]}`
		}
		return objString;
	}
}
module.exports = {
	Stack
}


// const stack = new Stack()
// //push()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// console.log(stack);
// //size()
// console.log(stack.size())
// //isEmpty()
// console.log(stack.isEmpty());
// //pop()
// console.log(stack.pop());
// console.log(stack);
// //peek()
// console.log(stack.peek());
// //toString
// console.log(stack.toString());
