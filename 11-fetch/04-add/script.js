/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function getHero() {
        try {
            const hero = await fetch('http://localhost:3000/heroes');
            const data = await hero.json();
            return data;
        } catch (error) {
            console.error(error);
        };
    }

    let array = getHero();

    document.getElementById('run').addEventListener('click', function() {
        function newHero(data) {
            const nameInput = document.querySelector('#hero-name').value;
            const alterEgo = document.querySelector('#hero-alter-ego').value;
            const power = document.querySelector('#hero-powers').value;

            if (nameInput.length != 0 && alterEgo.length != 0 && power.length != 0) {
                data.push({
                    'id': data.length + 1,
                    'name': nameInput,
                    'alterEgo': alterEgo,
                    'powers': [power]
                });
            } else {
                alert('there seems to be an empty input');
            }

        };

        array.then(data => {
            newHero(data);
            console.log(data);
        })
    });
})();