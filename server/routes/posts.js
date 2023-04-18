import express from "express";
import {getFeedPosts, getUserPosts, likePost} from "../contoller/posta.js";
import {verifyToken} from "../middleware/auth.js";

const router= express.Router();

//Read
router.get("/",verifyToken,getFeedPosts);
router.get("/:uderId/posts",verifyToken,getUserPosts);

//Update
router.patch("/:id/like",verifyToken,likePost);

export default router;