/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let today = new Date();
        let todayDay = today.getDate();
        let todayMonth = today.getMonth() + 1;
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let age = today.getFullYear() - year;

        if (day <= todayDay && month <= todayMonth) {
            alert(age);
        } else {
            alert(age - 1);
        }

    });
})();