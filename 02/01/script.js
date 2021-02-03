(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        const number1 = document.getElementById("op-one").value;
        const number2 = document.getElementById("op-two").value;

        let result = parseFloat(number1) + parseFloat(number2);

        window.alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        const number1 = document.getElementById("op-one").value;
        const number2 = document.getElementById("op-two").value;

        let result = number1 - number2;

        window.alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        const number1 = document.getElementById("op-one").value;
        const number2 = document.getElementById("op-two").value;

        let result = number1 * number2;

        window.alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        const number1 = document.getElementById("op-one").value;
        const number2 = document.getElementById("op-two").value;

        let result = number1 / number2;

        window.alert(result);
    });
})();