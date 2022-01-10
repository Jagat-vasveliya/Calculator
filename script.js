document.querySelectorAll("button").forEach((btn) => {
	/*  var firstValue;
     var secondValue;
     var answer; */
	btn.addEventListener("click", () => {
		var display = document.getElementById("dis");
		var btnValue = btn.value;

          // advance practice code
          
		/* switch (btnValue) {
			case "+":
				if (typeof firstValue != 'undefined') {
					answer = parseInt(firstValue) + parseInt(display.value);
					firstValue = answer;
                         display.value = '';
				} else {
					firstValue = display.value;
					display.value = "";
				}
				break;
			case "=":
				alert(firstValue);
				display.value = answer;
				break;

			default:
				display.value = display.value + btnValue;
				break;
		} */

		switch (btnValue) {
			case "C":
				display.value = "";
				break;

			case "erase":
				display.value = (display.value).slice(0, -1);
				break;

			case "=":
				display.value = eval(display.value);
				break;

			default:
				display.value = display.value + btn.value;
				break;
		}
	});
});
