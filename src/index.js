module.exports = function check(str, bracketsConfig) {
 let stack = [];
	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < bracketsConfig.length; j++) {
			if(str[i] === bracketsConfig[j][0]) stack.push(str[i]);
			if (str[i] === bracketsConfig[j][1]) {
				if (stack.pop() != bracketsConfig[j][0]) { 
					return false }
			}
		}
	}
	if(stack.length) return false;
	return true;
}