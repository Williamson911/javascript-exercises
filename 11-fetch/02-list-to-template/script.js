/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const template = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.getElementById('run').addEventListener('click', function() {

        async function test() {
            const myFetch = await fetch('http://localhost:3000/heroes');
            const data = await myFetch.json();

            data.forEach(({ name, alterEgo, abilities }) => {
                const clone = template.cloneNode(true).content;

                clone.querySelector(".name").textContent = name;
                clone.querySelector(".alter-ego").textContent = alterEgo;
                clone.querySelector(".powers").textContent = abilities.join('. ');

                target.appendChild(clone);
            });
        }
        test();
    });
})();