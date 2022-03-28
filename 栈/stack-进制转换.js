const {
	Stack
} = require("./stack.js")


function baseConverter(decNumber, base) {
	const remStack = new Stack();
	const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let rem;
	let baseString = '';
	if (base < 2 || base > 36) {
		return '';
	}
	while (decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while (!remStack.isEmpty()) {
		// baseString += remStack.pop().toString()  //这里不采用直接出栈然后tostring的原因是栈里放有11，12...15，需要转换为ABCD
		baseString += digits[remStack.pop()];
	}
	console.log(baseString);
}

baseConverter(15, 16)
