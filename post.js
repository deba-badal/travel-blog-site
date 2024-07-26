document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');
  
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentText = commentForm.querySelector('textarea').value;
      const commentElement = document.createElement('div');
      commentElement.textContent = commentText;
      commentList.appendChild(commentElement);
      commentForm.reset();
    });
  });