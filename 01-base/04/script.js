/* becode/javascript
 *
 * /01-base/01-var-alert/script.js - 1.1: var & alert
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var age = prompt("Age?");
    var gender = prompt("Gender?");
    var town = prompt("Town?");
    var x = confirm(`Is it correct? You are ${age}, you are a ${gender}, you live in ${town}.`);
    if (x == true) {
        window.alert("Ok!")
    } else {
        location.reload()
    }


})();