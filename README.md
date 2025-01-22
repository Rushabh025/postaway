# postaway
A social media application with a user friendly interface to register and authenticate users, create a post, and to like and comment on that post.


Tasks
1. Set up an Express.js application and its related configurations.
2. Install necessary project dependencies based on the functionalities required.
3. Create a User model with functions for getting all the users, adding a user, and confirming user login.
4. Create a User controller to interface with the User model and handle user registration and login.
5. Create a Post model with functions for creating a new post, retrieving all posts, retrieving user posts, getting a post by its id, updating a post and deleting a post.    
6. Create a Post controller to interface with the Post model to retrieve, create, update and delete posts. 
7. Create a Comment model with functions for creating a comment, getting all comments on a specific post, updating and deleting a comment.
8. Create a Comment controller to interface with the Comment model to retrieve, create, update and delete comments on a specific post. 
9. Create a Like model with functions for adding and removing a like and to get all likes on a specific post.
10. Create a Like controller to interface with the Like model to retrieve and toggle likes on a specific post. 
11. Create a custom error class and an error handling middleware to send custom error messages.
12. Create a file upload middleware to handle post media. 
13. Create a token based middleware for user authentication and to secure all the application routes. 
14. Create a logger middleware to log request URL and body for all routes, excluding the user routes
15. Document the application explaining functionalities, dependencies, and code organization for easy understanding of the codebase. 


Acceptance criteria
1. Create a scalable architecture with ExpressJS that separates data management, application logic and routing control. 
2. Utilize ES6 Modules to maintain code modularity and organization.
3. Use in-memory data structures for post, like, comment and user management operations.
4. Create a login and registration system, allowing users to register and log into their accounts.
5. Allow users to create a post, view all posts, view details of a specific post, like and remove the like from a post and comment on a post.
6. The users should be able to update and delete the posts and comments, view profile posts, and get all likes and comments on a specific post.
7. Create a custom error class that sets the status code and error message and use an error handler middleware to send custom error messages.
8. Use Json Web Tokens to create, verify and manage authentication tokens and to secure all the application routes, excluding the user routes.
9. Implement a file upload middleware to store and manage post media.
10. Use a logger middleware to log request URL and body for all routes, excluding the user routes.
11. Ensure original and high-quality code with comprehensive documentation.

