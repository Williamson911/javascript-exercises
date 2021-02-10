/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', function() {

        let random = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

        random.forEach(function(item, index) {
            let = insert = document.getElementById("n-" + (index + 1));
            insert.innerHTML = item;
        });

        document.getElementById("min").innerHTML = Math.min(...random);
        document.getElementById("max").innerHTML = Math.max(...random);
        document.getElementById("sum").innerHTML = random.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = random.reduce((a, b) => a + b, 0) / random.length;
    });

})();