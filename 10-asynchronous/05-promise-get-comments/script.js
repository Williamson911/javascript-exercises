/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        const postsPromise = window.lib.getPosts();

        postsPromise.catch((postsValue) => {
            console.error(postsValue);
        });
        postsPromise.then((postsValue) => {
            let total = 0;
            Promise.all(postsValue.map((post) => window.lib.getComments(post.id)))
                .then((commentsArray) => {
                    commentsArray.forEach((comments) => {
                        postsValue[total++].comments = comments;
                        if (total === postsValue.length) {
                            console.log(postsValue);
                        }
                    });
                });
        });
    });
})();