// content.js

// Function to observe changes in the DOM
function observeLikes() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const likeButton = node.querySelector('[data-testid="like"]');
              if (likeButton) {
                likeButton.addEventListener("click", () => {
                  const tweetElement = node.closest("article");
                  if (tweetElement) {
                    const tweetText = tweetElement.innerText;
                    saveLikedTweet(tweetText);
                  }
                });
              }
            }
          });
        }
      });
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  function storeLikedPost(postId) {
    let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    likedPosts.push(postId);
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    console.log('Post stored:', postId);
}

// Detect likes on the page (example: a simple click event on a like button)
document.querySelectorAll('button.like').forEach(button => {
    button.addEventListener('click', (event) => {
        const postId = event.target.getAttribute('data-post-id');
        storeLikedPost(postId);
    });
});


  // Save liked tweet to localStorage
  function saveLikedTweet(tweet) {
    const likedTweets = JSON.parse(localStorage.getItem("likedTweets") || "[]");
    if (!likedTweets.includes(tweet)) {
      likedTweets.push(tweet);
      localStorage.setItem("likedTweets", JSON.stringify(likedTweets));
      console.log("Liked tweet saved:", tweet);
    }
  }
  
  // Start observing for likes when the script runs
  observeLikes();
  