export default class CommentModel{

    constructor(id, userId, postId, content){
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static createComment(commentData){
        let newComment = new CommentModel(
            comments.length + 1,
            commentData.userId,
            commentData.postId,
            commentData.content
        );

        comments.push(newComment);
        return newComment;
    }

    // there might be error
    static getPostComments(postId){
        return comments.find(comment => comment.postId === postId);
    }

    static updateComment(postId){
        
    }

}

let comments = [];