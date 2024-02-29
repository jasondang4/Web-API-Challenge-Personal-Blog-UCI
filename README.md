# Web-API-Challenge-Personal-Blog-UCI

# Description
In this challenge I was tasked with making a personal Blog website from scratch using only idex.html, styles.css, and script.js. Here you will be presented with a fully fucntioning website that allows you to create a blog with the content of username, title, and content. Furthermore there is a button that allows you to toggle between light and dark mode. Addtionally, all blogs that are created will be saved and then presented in a different page called "Blog Posts" where you can view all previously created Blogs with the entered content. There is alos a "back" button that will take you back to the main page to enter more blogs.

# Usage
Deploy the page. When the page is fully deployed you are presented with a website that allows you to create a blog post. Here you are required to fill out all the catagories listed (Username, Titile, and Content), if these catagories are not filled out, then the page will prompt you to fill them out and will not proceed unless all catagories are properly filled. There is also a "toggle mode" button in the top left that allows the uder to toggle between a light and dark mode that is suited to the users preference. Once the user has filled out all the catagories, they can then click the "submit button," it will then take the user to a different page titled "Blog Posts," here the user can see all the content they entered on the previous page. Additonally the page also has a "back" button located in the top right that takese the user back to the previous page if they want to create more blogs. If they decide to do so. They can fill out all the catagories and submit the inforamtion again. Once they are taken to the "Blog Posts" page, they will notice that all previously created Blogs are still saved along with the newest one added. 

# Completed Tasks
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post
