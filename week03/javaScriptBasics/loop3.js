const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

rewiews = document.getElementById("reviews")
  
function displayPosts() {
    for (let post of posts) {
        const postElement = document.createElement("li");
        postElement.innerHTML = `${post.text}`;
        rewiews.appendChild(postElement);
    }
}

displayPosts(); //выведем на страницу

//переберем и найдем в цикле пост со словом "worst"
for (let post of posts) {
    if (post.text.indexOf('worst') !== -1) {
        posts.splice(posts.indexOf(post), 1);
    }
}

rewiews = document.getElementById("reviews2")
displayPosts(); //выведем на страницу