// popup.js
document.addEventListener('DOMContentLoaded', () => {
    let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const postsList = document.getElementById('liked-posts-list');
    likedPosts.forEach(postId => {
        const listItem = document.createElement('li');
        listItem.textContent = `Post ID: ${postId}`;
        postsList.appendChild(listItem);
    });
});
