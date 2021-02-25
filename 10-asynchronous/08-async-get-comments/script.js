/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const commentsFetched = 0;

    const asyncGetComments = async(postId, getCommentsFunction) => {
        const commentsPromise = await getCommentsFunction(postId);
        try {
            return commentsPromise;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const asyncGetPosts = async(getPostsFunction) => {
        const postsPromise = await getPostsFunction();
        try {
            postsPromise.forEach((post) => {
                post.comment = asyncGetComments(post.id, window.lib.getComments);
            });
            return postsPromise;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const printMessage = async() => {
        const message = await asyncGetPosts(window.lib.getPosts);
        try {
            console.log(message);
        } catch (e) {
            console.error(e);
        }
    };

    document.getElementById("run").addEventListener("click", () => {

        printMessage();

    });

})();