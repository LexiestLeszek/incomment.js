# incomment.js

This code creates a self-executing anonymous function to encapsulate the functionality of creating an in-product comments for any web application (similar to how its done in PowerPoint).

1. createCommentBox creates a div element at the position of the right-click (x, y).
2. Inside the div, it creates a textarea for comments and two buttons, 'Submit' and 'Cancel'. It also attaches event listeners to these buttons.
3. removeCommentBox function is used to remove the comment box from the DOM.
4. The contextmenu event listener captures the right-click event, prevents the default context menu, and triggers the creation of the comment box at the clicked position.
