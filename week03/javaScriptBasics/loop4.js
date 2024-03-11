const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

reviews.innerHTML = ""; // Clear the innerHTML of the reviews element

for (let post of posts) {
    if (post.id === 2) {
        for (let comment of post.comments) {
            if (comment.id === 3) {
                post.comments.splice(post.comments.indexOf(comment), 1);
            }
        }
    }
}

//собери список li  со вложенными комментариями

for (let post of posts) {
    const li = document.createElement("li");
    li.innerText = post.text;
    reviews.appendChild(li);
    if (post.comments.length > 0) {
        const ul = document.createElement("ul");
        li.appendChild(ul);
        for (let comment of post.comments) {
            const li = document.createElement("li");
            li.innerText = comment.text;
            ul.appendChild(li);
        }
    }
}