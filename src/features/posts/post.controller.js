import PostModel from "./post.model.js";

class PostController{
    createPost(req, res, next){
        try {
            const postData = req.body;
            const newPost = PostModel.addPost(postData);

            if(!newPost){
                return res.status(400).send("Data not pushed");
            }
            
            res.status(201).send(newPost);
            
        } catch (error) {
            throw new ApplicationError("New Post Not Created", 500);
        }
    }

    getAllPosts(req, res, next){
        try {
            const allPosts = PostModel.getAllPost();
            res.status(201).send(allPosts);
        } catch (error) {
            throw new ApplicationError("Could'nt Load All Posts", 500);
        }
    }

    getUserPosts(req, res, next){
        try {
            const userId = req.id;
            if(!userId){
                return res.status(400).send("User ID required");
            }

            const userPosts = PostModel.getUserPost(userId);
            res.status(201).send(userPosts);
        } catch (error) {
            throw new ApplicationError("Could'nt get User Posts", 500);
        }
    }

    getPostById(req, res, next){
        try {
            const id = req.id;
            const postsId = PostModel.getPostById(id);
            res.status(201).send(postsId)
        } catch (error) {
            throw new ApplicationError("Could'nt get Post by Id", 500);
        }
    }

    updatePost(req, res, next){
        try {
            const data = req.body;
            const updatedData = PostModel.updatePost(data);
            res.status(201).send(updatedData);
        } catch (error) {
            throw new ApplicationError("Update post failed", 500);
        }
    }

    deletePost(req, res, next){
        try {
            const id = req.id;
            PostModel.deletePost(id);
            res.status(201).send("Deleted Post successfully")
        } catch (error) {
            throw new ApplicationError("Delete post failed", 500);
        }
    }
}

export default PostController;