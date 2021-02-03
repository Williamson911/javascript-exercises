(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let num1 = document.getElementById("op-one").value;
    let num2 = document.getElementById("op-two").value;

    const performOperation = operation => {
        switch (operation) {
            case 'addition':
                alert(parseInt(num1) + parseInt(num2));
                break;
            case 'substraction':
                alert(num1 - num2);
                break;

            case 'multiplication':
                alert(num1 * num2);
                break;

            case 'division':
                alert(num1 / num2);
                break;

            default:
                alert('meh');
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();