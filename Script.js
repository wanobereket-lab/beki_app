function calculate(operator) {

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result;

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        alert("Please enter both numbers.");
        return;
    }

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }

            result = num1 / num2;
            break;
    }

    document.getElementById("result").textContent =
        "Result: " + result;
}

function clearCalculator() {

    document.getElementById("num1").value = "";

    document.getElementById("num2").value = "";

    document.getElementById("result").textContent = "Result: 0";
}
