function performOperation() {
    //Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let num3 = parseInt(document.getElementById('input3').value);
    let num4 = parseInt(document.getElementById('input4').value);
    let num5 = parseInt(document.getElementById('input5').value);
    let num6 = parseInt(document.getElementById('input6').value);
    //check if inputs are valid numbers
    if (!isNaN(num1 + num3 + num5) && !isNaN(num2 + num4 + num6)) {
        //perform the operation
        let result = divide(num1, num2) + multiply(num3, num4) + addition(num5, num6);


        //display the result

        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
    }

    function divide (a, b) {
        //Introduce a debugger statement to pause execution
        debugger;

        //divide

        return a / b;
    }

    function multiply (c, d) {
        debugger;

        //multiply
        return c * d;
    }

    function addition (e, f) {
        debugger;

        //addition
        return e + f;
    }

    function displayResult(result) {
        //Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;
    }