# inComment.js

This code creates a self-executing anonymous function to encapsulate the functionality of creating an in-product comments for any web application (similar to how its done in PowerPoint).

The createCommentBox() function creates a div element at the position of the right-click (x, y). Inside the div, it creates a textarea for comments and several buttons, including 'Submit', 'Cancel', 'Edit', 'Reply', 'Delete', 'Upvote', and 'Downvote'. It also attaches event listeners to these buttons. The 'Submit' button logs the comment text to the console and removes the comment box from the webpage. The 'Cancel' button simply removes the comment box. The 'Edit' button allows the user to edit the comment. The 'Reply' button creates a new comment box for a reply to the current comment. The 'Delete' button removes the comment from the list of comments. The 'Upvote' and 'Downvote' buttons allow the user to vote on the comment.
The removeCommentBox() function is used to remove the comment box from the DOM. It also removes the comment from the list of comments.
The contextmenu event listener captures the right-click event, prevents the default context menu, and triggers the creation of the comment box at the clicked position. If a comment box already exists, it is removed before a new one is created. If the right-click event occurs within an existing comment box, a new comment box is created for a reply to the current comment.

# Installation and usage

**Intalling using CDN**

Include the script in your HTML:
`<script src="https://[LINK TO THE CDN]/incomment.js"></script>`

**Installing with a Local File**

1. Download the script:
Save the JavaScript code provided earlier as a .js file, for example, inComment.js.

2. Include the script in your HTML:
`<script src="path/to/inComment.js"></script>`

**How to use in your app:**

Once the library is included, you can right-click anywhere on your web app to trigger the comment box. You can then type the comment and click "Submit" or "Cancel" as needed. Comments will be logged in the console for demonstration purposes, but you'll need to replace this logging functionality with your desired storage or handling mechanism.

