let postIdInput = document.getElementById("postIdInput");
let searchBtn = document.getElementById("searchBtn");
let postResult = document.getElementById("postResult");

searchBtn.addEventListener("click", () => {
    let postId = parseInt(postIdInput.value);

    if (isNaN(postId) || postId < 1 || postId > 100) {
        alert("Enter the correct post ID from 1 to 100");
    }

    postResult.innerHTML = "";

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error while executing a request");
            }
            return response.json();
        })
        .then((post) => {
            let postElement = document.createElement("div");
            let postTitle = document.createElement("h2");
            postTitle.textContent = `Post №${post.id}`;
            postElement.appendChild(postTitle);

            let postHeading = document.createElement("h3");
            postHeading.textContent = post.title;
            postElement.appendChild(postHeading);

            let postBody = document.createElement("p");
            postBody.textContent = post.body;
            postElement.appendChild(postBody)

            let loadCommentsBtn = document.createElement("button");
            loadCommentsBtn.textContent = "Download comments";
            postElement.appendChild(loadCommentsBtn);

            let commentsContainer = document.createElement("div");
            commentsContainer.id = "commentsContainer";
            postElement.appendChild(commentsContainer);

            postResult.appendChild(postElement);

            loadCommentsBtn.addEventListener("click", () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Error receiving comments");
                        }
                        return response.json();
                    })
                    .then((comments) => {
                        commentsContainer.innerHTML = "";
                        comments.forEach((comment) => {
                            let commentElement = document.createElement("div");
                            let commentTitle = document.createElement("h3");
                            commentTitle.textContent = comment.name;
                            commentElement.appendChild(commentTitle);

                            let commentBody = document.createElement("p");
                            commentBody.textContent = comment.body;
                            commentElement.appendChild(commentBody);

                            commentsContainer.appendChild(commentElement);
                        });
                    })
                    .catch((error) => {
                        alert(error.message);
                    });
            });
        })
        .catch((error) => {
            alert(error.message);
        });
});
