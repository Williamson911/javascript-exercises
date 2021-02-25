/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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
        function killHero(data) {
            const input = document.querySelector('#hero-id').value;

            data.forEach((element, i) => {

                if (element.id == input) {
                    data.splice(i, 1);
                }
            });

            if (input.length == 0) {
                alert('there seems to be an empty input');
            }
        };

        array.then(data => {
            killHero(data);
            console.log(data);
        })
    });
})();