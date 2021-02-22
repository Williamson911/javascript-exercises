/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        set name(name) {
            [this.firstname, this.lastname] = name.split(" ");
        }

        get name() {
            return `${this.firstname} ${this.lastname}`;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        const person = new Person("William", "Lawson");
        console.log(person.name);
        person.name = "Peter Parker";
        console.log(person.name);
    });

})();