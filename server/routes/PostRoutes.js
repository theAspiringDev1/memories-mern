import express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPostsBySearch,
    getPost,
} from "../controllers/PostController.js";
import verifyAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyAuth, createPost);
router.patch("/:id", verifyAuth, updatePost);
router.delete("/:id", verifyAuth, deletePost);
router.patch("/:id/like", verifyAuth, likePost);

export default router;
