/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    let Arrays = keys.map(function(value, index) {
        return [keys[index], values[index]];
    });

    document.getElementById('run').addEventListener('click', function() {
        const obj = Object.fromEntries(Arrays);
        console.log(obj);
    });
})();