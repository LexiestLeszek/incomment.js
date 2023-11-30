(function() {
 let commentBoxes = [];
 let commentIdCounter = 1;

 function createCommentBox(x, y, parentId = null) {
  const commentBox = document.createElement('div');
  const commentId = `comment_${commentIdCounter}`;
  commentBox.classList.add('comment-box');
  commentBox.dataset.commentId = commentId;
  commentBox.style.position = 'absolute';
  commentBox.style.top = `${y}px`;
  commentBox.style.left = `${x}px`;
  commentBox.innerHTML = `
    <textarea placeholder="Write your comment here"></textarea>
    <button class="submitBtn">Submit</button>
    <button class="cancelBtn">Cancel</button>
    <button class="editBtn">Edit</button>
    <button class="replyBtn">Reply</button>
    <button class="deleteBtn">Delete</button>
    <button class="upvoteBtn">Upvote</button>
    <button class="downvoteBtn">Downvote</button>
    <div class="commentCount">Comments: 0</div>
  `;
  document.body.appendChild(commentBox);

  const submitBtn = commentBox.querySelector('.submitBtn');
  const cancelBtn = commentBox.querySelector('.cancelBtn');
  const editBtn = commentBox.querySelector('.editBtn');
  const replyBtn = commentBox.querySelector('.replyBtn');
  const deleteBtn = commentBox.querySelector('.deleteBtn');
  const upvoteBtn = commentBox.querySelector('.upvoteBtn');
  const downvoteBtn = commentBox.querySelector('.downvoteBtn');

  submitBtn.addEventListener('click', () => {
    const commentText = commentBox.querySelector('textarea').value;
    // Handle submission (e.g., send data to server or save locally)
    console.log(`Comment ${commentId} submitted:`, commentText);
    removeCommentBox(commentBox);
    console.log('Parent ID:', parentId);
  });

  cancelBtn.addEventListener('click', () => {
    removeCommentBox(commentBox);
  });

  editBtn.addEventListener('click', () => {
    const textarea = commentBox.querySelector('textarea');
    textarea.value = textarea.value;
    textarea.disabled = false;
  });

  replyBtn.addEventListener('click', () => {
    createCommentBox(replyBtn.offsetLeft, replyBtn.offsetTop, commentBox.dataset.commentId);
  });

  deleteBtn.addEventListener('click', () => {
    const index = commentBoxes.findIndex(cb => cb.id === commentBox.dataset.commentId);
    if (index > -1) {
      commentBoxes.splice(index, 1);
    }
    removeCommentBox(commentBox);
  });

  upvoteBtn.addEventListener('click', () => {
    // Find the comment box in the array and increment the commentScore
    const commentBoxObj = commentBoxes.find(cb => cb.id === commentBox.dataset.commentId);
    commentBoxObj.commentScore++;
    // Update the commentCount div to reflect the new score
    const commentCountDiv = commentBox.querySelector('.commentCount');
    commentCountDiv.textContent = `Comments: ${commentBoxObj.commentScore}`;
  });

  downvoteBtn.addEventListener('click', () => {
    // Find the comment box in the array and decrement the commentScore
    const commentBoxObj = commentBoxes.find(cb => cb.id === commentBox.dataset.commentId);
    commentBoxObj.commentScore--;
    // Update the commentCount div to reflect the new score
    const commentCountDiv = commentBox.querySelector('.commentCount');
    commentCountDiv.textContent = `Comments: ${commentBoxObj.commentScore}`;
  });

  // Add a commentScore property to the comment box object
  commentBoxes.push({ id: commentId, box: commentBox, commentScore: 0 });
  commentIdCounter++;

  return commentBox;
 }

 function removeCommentBox(box) {
  box.remove();
  const index = commentBoxes.findIndex(cb => cb.box === box);
  if (index > -1) {
    commentBoxes.splice(index, 1);
  }
 }

 document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const existingBox = document.querySelector('.comment-box');
  if (existingBox) {
    removeCommentBox(existingBox);
  }

  const parentBox = event.target.closest('.comment-box');
  if (parentBox) {
    const parentBoxRect = parentBox.getBoundingClientRect();
    const parentBoxX = parentBoxRect.left + parentBoxRect.width;
    const parentBoxY = parentBoxRect.top;
    createCommentBox(parentBoxX, parentBoxY, parentBox.dataset.commentId);
  } else {
    createCommentBox(mouseX, mouseY);
  }
 });
})();
