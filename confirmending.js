// check if string ends with target string

function confirmEnding(str, target) {
	return str.length >= target.length && str.substr(str.length - target.length) === target;
}

/*
or

function confirmEnding(str, target) {
	return str.indexOf(target, str.length - target.length) !== -1;
}

or 

function confirmEnding(str, target) {
	return str.endsWith(target);
}
*/


confirmEnding("Bastian", "n");
