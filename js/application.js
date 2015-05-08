$(document).ready(function() {

var $syms = $('#kemoti span');
	$syms.each(function() {
		var $sym = $(this)
		$sym.on('click', function(event) {
			var $clickedOn = $(event.target);
			var input = $clickedOn.text();
			var classname = "." + $clickedOn.parent()[0].getAttribute("class") + "Slot";
			if (classname == ".faceSlot") {
				var arr = input.split("  ");
				$(".lfaceSlot").text(arr[0]);
				$(".rfaceSlot").text(arr[1]);
				//I returned null to stop the function here
				return null;
			}
			$(classname).text(input);
		});
	});

});

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function copyToClipboard() {
	var text = larmSlot.innerHTML + lfaceSlot.innerHTML + leyeSlot.innerHTML 
		+ mouthSlot.innerHTML + reyeSlot.innerHTML + rfaceSlot.innerHTML 
		+ rarmSlot.innerHTML + itemSlot.innerHTML;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

