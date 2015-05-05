$(document).ready(function() {

var $syms = $('#kemoti span');
	$syms.each(function() {
		var $sym = $(this)
		$sym.on('click', function(event) {
			var $clickedOn = $(event.target);
			var input = $clickedOn.text();
			console.log(input);
			var classname = "." + $clickedOn.parent()[0].getAttribute("class") + "Slot";
			console.log(classname);
			if (classname == ".faceSlot") {
				var arr = input.split("  ");
				$(".lfaceSlot").text(arr[0]);
				$(".rfaceSlot").text(arr[1]);
				return null;
			}
			var print = $(classname).text(input);
		});
	});

});

function copyToClipboard() {
	var text = larmSlot.innerHTML + lfaceSlot.innerHTML + leyeSlot.innerHTML 
		+ mouthSlot.innerHTML + reyeSlot.innerHTML + rfaceSlot.innerHTML + rarmSlot.innerHTML;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}




