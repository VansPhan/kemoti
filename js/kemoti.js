$(document).ready(function() {

var syms = document.querySelectorAll('#kemoti span');
// try doing the above query on the dom using jquery
// look something like  var syms =  $('#kemoti span')
// use console.log to debug in chrome console.
var screenForm = [];

for(var i = 0; i < syms.length; i++) {
	syms[i].onclick = function(e) {

		var input = document.querySelector('.screen');
		// you named two variables "input" overwriting the previous one
		// what did you wan to do here?
		var input = document.getElementById("kemoti");


		var inputClass = input.className;
		var inputVal = input.innerHTML;


		// what is "this"?
		var btnVal = this.innerHTML;


		if(btnVal == 'C') {
			input.innerHTML = '';
		}

		switch(inputClass){
		    case "faces": input.innerHTML = "I have class1"; break;
		    case "top": input.innerHTML = "I have class2"; break;
		    case "class3": input.innerHTML = "I have class3"; break;
		    case "class4": input.innerHTML = "I have class4"; break;
		    default: input.innerHTML = "Hi";
		}

		// if else(btnVal.contains(faces)) {
		// 	input.innerHTML += btnVal;
		// }

		// else {
		// 	input.innerHTML += btnVal;
		// }

		// prevent page jumps
		e.preventDefault();
	}
}
 });

