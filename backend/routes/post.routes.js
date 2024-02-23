const express = require('express');
const { setPosts, getPosts, editPosts, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const { verifyToken } = require('../token');
const router = express.Router();

router.get("/",verifyToken, getPosts);
router.post("/", setPosts);

router.put("/:id", editPosts);
router.delete("/:id",deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);

router.post('/login',(req,res) =>{
    const payload = {
        utilisateur:'kweshi',
        role:'admin'
    };
    const token = jwt.sign(payload,secretKey,options);
    res.json(token);
});




module.exports = router;