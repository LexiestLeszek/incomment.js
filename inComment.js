(function() {
    let commentBox;
  
    function createCommentBox(x, y) {
      commentBox = document.createElement('div');
      commentBox.style.position = 'absolute';
      commentBox.style.top = `${y}px`;
      commentBox.style.left = `${x}px`;
      commentBox.innerHTML = `
        <textarea placeholder="Write your comment here"></textarea>
        <button id="submitBtn">Submit</button>
        <button id="cancelBtn">Cancel</button>
      `;
      document.body.appendChild(commentBox);
  
      const submitBtn = commentBox.querySelector('#submitBtn');
      const cancelBtn = commentBox.querySelector('#cancelBtn');
  
      submitBtn.addEventListener('click', () => {
        const commentText = commentBox.querySelector('textarea').value;
        // Handle submission (e.g., send data to server or save locally)
        console.log('Comment submitted:', commentText);
        removeCommentBox();
      });
  
      cancelBtn.addEventListener('click', () => {
        removeCommentBox();
      });
    }
  
    function removeCommentBox() {
      if (commentBox) {
        commentBox.remove();
        commentBox = null;
      }
    }
  
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      createCommentBox(mouseX, mouseY);
    });
  })();
  