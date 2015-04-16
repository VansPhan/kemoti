$(document).ready(function() {

//Made "var syms = document.querySelectorAll('#kemoti span');" into jquery
	var $syms = $('#kemoti span')
	// console.log($syms);

		$syms.each(function() {
			var $sym = $(this)


			$sym.on('click', function(event) {
				var $clickedOn = $(event.target)
				var input = $clickedOn.text()
				console.log(input)
				// var printScreen = document.getElementById("output").innerHTML += input;
				var printScreen = $("#output").text(input)
					if (($clickedOn.parent().hasClass('faces')) === true)
					//I want this to print the actual text but Im getting back undefined
					//problem is on line 19 where this is coming back as undefined
						printScreen;
					else
						console.log("It's not a face");

			});

		});

});


// var screenForm = {
// 	LARM: 'ლ',
// 	LFACE: '(',
// 	LEYE: 'ಠ',
// 	MOUTH: '_',
// 	REYE: 'ಠ',
// 	RFACE: ')',
// 	RARM: 'ლ'
// };

