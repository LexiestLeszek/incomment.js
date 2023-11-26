# inComment.js

This code creates a self-executing anonymous function to encapsulate the functionality of creating an in-product comments for any web application (similar to how its done in PowerPoint).

1. createCommentBox creates a div element at the position of the right-click (x, y).
2. Inside the div, it creates a textarea for comments and two buttons, 'Submit' and 'Cancel'. It also attaches event listeners to these buttons.
3. removeCommentBox function is used to remove the comment box from the DOM.
4. The contextmenu event listener captures the right-click event, prevents the default context menu, and triggers the creation of the comment box at the clicked position.

# Usage

*Intalling using CDN*

Include the script in your HTML:
`<script src="https://[LINK TO THE CDN]/incomment.js"></script>`

*Installing with a Local File*

1. Download the script:
Save the JavaScript code provided earlier as a .js file, for example, inProductComment.js.

2. Include the script in your HTML:
`<script src="path/to/inComment.js"></script>`

How to use in your app:
Once the library is included, you can right-click anywhere on your web app to trigger the comment box. You can then type their comment and click "Submit" or "Cancel" as needed. Comments will be logged in the console for demonstration purposes, but you'll need to replace this logging functionality with your desired storage or handling mechanism.

