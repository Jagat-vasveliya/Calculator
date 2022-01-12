let firstValue = "";
let secondValue = "";
let operation = "";
let answer = "";
document.querySelectorAll("button").forEach((btn) => {
	btn.addEventListener("click", () => {
		let display = document.getElementById("dis");
		let btnValue = btn.value;

		// advance practice code

		switch (btnValue) {
			case "=":
				answer = firstValue + operation + display.value;
				display.value = eval(answer.replace("%", "/100*"));
				firstValue = "";
				secondValue = "";
				operation = "";
				break;

			case "C":
				display.value = "";
				firstValue = "";
				secondValue = "";
				break;

			case "erase":
				display.value = display.value.slice(0, -1);
				break;

			default:
				if (
					btn.value == "+" ||
					btn.value == "-" ||
					btn.value == "*" ||
					btn.value == "/" ||
					btn.value == "%"
				) {
					if (firstValue != "") {
						answer = firstValue + operation + display.value;
						firstValue = eval(answer.replace("%", "/100*"));
						display.value = "";
						operation = btn.value;
					} else {
						firstValue = display.value;
						operation = btn.value;
						display.value = "";
					}
				} else {
					display.value = display.value + btnValue;
				}
				break;
		}

		/* switch (btnValue) {
			case "C":
				display.value = "";
				break;

			case "erase":
				display.value = display.value.slice(0, -1);
				break;

			case "=":
				display.value = eval(display.value.replace("%", "/100*"));
				break;

			default:
				display.value = display.value + btn.value;
				break;
		} */
	});
});
