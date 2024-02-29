document.getElementById("toggle-mode-button").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

document.getElementById("blog-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Check if any field is empty
    if (!username || !title || !content) {
        alert("Please complete all fields before submitting the form.");
        return;
    }

    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    // Retrieve existing blog posts from localStorage or initialize an empty array
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    
    // Add the new blog post to the array
    blogPosts.push(blogPost);

    // Store the updated array back to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    window.location.href = "posts.html"; // Redirect to the posts page
});

document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const blogPostsContainer = document.getElementById("blog-posts");

    blogPostsContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>Author: ${post.username}</p>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});

document.getElementById("back-button").addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to the main page
});
