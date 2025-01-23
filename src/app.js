import dotenv from "dotenv";
dotenv.config();
import express from "express";
import session from "express-session";
import { checkAuth } from "./middleware/auth.middleware.js";
import userRoutes from "./features/users/user.routes.js";
import postRoutes from "./features/posts/post.routes.js";
import commentRoutes from "./features/comments/comment.routes.js";
import likeRoutes from "./features/likes/like.routes.js";

const app = express();

app.use(session({
    secret: "12345",
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000*60*60,
    },
}));

app.use('/api', checkAuth, userRoutes);
app.use('/api/posts', checkAuth, postRoutes);
app.use('/api/comments', checkAuth, commentRoutes);
app.use('/api/likes', checkAuth, likeRoutes);

export default app;