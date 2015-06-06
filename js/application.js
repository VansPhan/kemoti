$(document).ready(function() {

var $syms = $('#kemoti span');
	$syms.each(function() {
		var $sym = $(this)
		$sym.on('click', function(event) {
			var $clickedOn = $(event.target);
			var input = $clickedOn.text();
			var classname = "." + $clickedOn.parent()[0].getAttribute("id") + "Slot";
			if (classname == ".faceSlot") {
				var arr = input.split("  ");
				$(".lfaceSlot").text(arr[0]);
				$(".rfaceSlot").text(arr[1]);
				//I returned null to stop the function here
				return null;
			}
			if (classname == ".eyeSlot") {
				var arr = input.split("  ");
				$(".leyeSlot").text(arr[0]);
				$(".reyeSlot").text(arr[1]);
				//I returned null to stop the function here
				return null;
			}
			if (classname == ".preSlot") {
				c();
				$(classname).text(input);
				return null;
			}
			$(classname).text(input);
		});
	});

});

function c () {
	document.getElementById('screenId').innerHTML = "<span id='preSlot' class='preSlot'></span><span id='larmSlot' class='armSlot'></span><span id='lfaceSlot' class='lfaceSlot'></span><span id='leyeSlot' class='leyeSlot'></span><span id='mouthSlot' class='mouthSlot'></span><span id='reyeSlot' class='reyeSlot'></span><span id='rfaceSlot' class='rfaceSlot'></span><span id='rarmSlot' class='armSlot'></span><span id='itemSlot'class='itemSlot'></span>";
}

function toggle_visibility(id) {
		$(".btn").hide();
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function copyToClipboard() {
	var text = preSlot.innerHTML + larmSlot.innerHTML + lfaceSlot.innerHTML + leyeSlot.innerHTML 
		+ mouthSlot.innerHTML + reyeSlot.innerHTML + rfaceSlot.innerHTML 
		+ rarmSlot.innerHTML + itemSlot.innerHTML;
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

