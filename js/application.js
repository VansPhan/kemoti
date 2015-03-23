$(document).ready(function() {

//Made "var syms = document.querySelectorAll('#kemoti span');" into jquery
var $syms = $('#kemoti span');

var screenForm = { 
	LARM: 'ლ',
	LFACE: '(',
	LEYE: 'ಠ',
	MOUTH: '_',
	REYE: 'ಠ',
	RFACE: ')',
	RARM: 'ლ'
};

$syms.each(function() {
	var $sym = $(this);

	$sym.on('click', function(event) {
		var $clickedOn = $(event.target);
		// console.log($clickedOn.parent().hasClass('faces'));
		if (($clickedOn.parent().hasClass('faces')) === true)
			var printed = ""
			for (var key in screenForm) {
				if (screenForm.hasOwnProperty(key)) {
					printed += screenForm[key];
				}					
			}
			console.log(printed);

	});
});

// console.log(screenForm.parse(screenForm.stringify(screenForm)));




// for(var i = 0; i < syms.length; i++) {
// 	syms[i].onclick = function(e) {

// 		var input = document.querySelector('.screen');
// 		// you named two variables "input" overwriting the previous one
// 		// what did you wan to do here?
// 		var input = document.getElementById("kemoti");


// 		var inputClass = input.className;
// 		var inputVal = input.innerHTML;


// 		// what is "this"?
// 		var btnVal = this.innerHTML;


// 		if(btnVal == 'C') {
// 			input.innerHTML = '';
// 		}

// 		switch(inputClass){
// 		    case "faces":
// 			    input.innerHTML = "I have class1";
// 			    break;
// 		    case "top":
// 			    input.innerHTML = "I have class2";
// 			    break;
// 		    case "class3":
// 			    input.innerHTML = "I have class3";
// 			    break;
// 		    case "class4":
// 			    input.innerHTML = "I have class4";
// 			    break;
// 		    default:
// 			    input.innerHTML = "Hi";
// 			    break
// 		}

// 		// if else(btnVal.contains(faces)) {
// 		// 	input.innerHTML += btnVal;
// 		// }

// 		// else {
// 		// 	input.innerHTML += btnVal;
// 		// }

// 		// prevent page jumps
// 		e.preventDefault();
// 	}
// }
 });

