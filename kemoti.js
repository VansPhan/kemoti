
var syms = document.querySelectorAll('#kemoti span');
var screenForm = [];


for(var i = 0; i < syms.length; i++) {
	syms[i].onclick = function(e) {
		
		var input = document.querySelector('.screen');
		var input = document.getElementById("kemoti");
		var inputClass = input.className;
		var inputVal = input.innerHTML;
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