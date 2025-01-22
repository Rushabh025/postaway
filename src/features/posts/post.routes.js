import express from "express";
import PostController from "./post.controller.js";

const postRoutes = express.Router();
const postController = new PostController();

postRoutes.get('/all', postController.getAllPosts);
postRoutes.get('/:id', postController.getPostById);
postRoutes.get('/', postController.getAllPosts);
postRoutes.post('/', postController.createPost);
postRoutes.delete('/:id', postController.deletePost);
postRoutes.put('/:id', postController.updatePost);

export default postRoutes;
