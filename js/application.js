$(document).ready(function() {

//Made "var syms = document.querySelectorAll('#kemoti span');" into jquery
	var $syms = $('#kemoti span');
	console.log($syms);

		$syms.each(function() {
			var $sym = $(this);

			$sym.on('click', function(event) {
				var $clickedOn = $(event.target);

				// console.log($clickedOn.parent().hasClass('faces'));
				if (($clickedOn.parent().hasClass('faces')) === true)
					console.log($clickedOn);
					
				else
					console.log("It's not a face")

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

