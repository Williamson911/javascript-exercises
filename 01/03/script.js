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

    var cake = prompt("Do you want more cake?");

    if (cake == "Yes") {
        window.alert("Congratulations! Here's some cake!")
    } else {
        window.alert("More cake for me then :p !")
    }

})();