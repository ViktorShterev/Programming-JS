function attachEvents() {
    
    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    const buttonLoadPosts = document.getElementById("btnLoadPosts");
    const buttonViewPost = document.getElementById("btnViewPost");
    const postsSelect = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    let allPosts = {};

    buttonLoadPosts.addEventListener("click", async () => {
        postsSelect.innerHTML = "";

        const response = await fetch(baseUrl + "/posts");
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement("option");

            option.value = postId;
            option.textContent = postObj.title;
            postsSelect.appendChild(option);
        }
    });

    buttonViewPost.addEventListener("click", async () => {
        postComments.innerHTML = "";

        const postId = postsSelect.value;

        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseUrl + "/comments");
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(comment => comment.postId === postId);

        filteredComments.forEach(comment => {
            let li = document.createElement("li");

            li.value = comment.id;
            li.textContent = comment.text;

            postComments.appendChild(li);
        })
    })
}

attachEvents();