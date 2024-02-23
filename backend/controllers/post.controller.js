const Postmodels = require("../models/post.model");


module.exports.getPosts = async (req, res) => {
    try {
        const Posts = await Postmodels.find();
        res.json(Posts)
    }
    catch (error) {
        res.json({ message: error.message })
    }
};
module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
        res.status(400).json({ message: "merci d'ajouter un message" });
    }
    const newTweet = await Postmodels.create({
        message: req.body.message,
        author: req.body.author,
    });
    res.json(newTweet)

}
module.exports.editPosts = async (req, res) => {
    const Post = await Postmodels.findById(req.params.id);
    if (!Post) {
        res.json({ message: "ce post n'éxiste pas" });
    }
    const updatePost = await Postmodels.findByIdAndUpdate(
        Post,
        req.body, {
        new: true,
    }
    );
    res.json(updatePost)

}

module.exports.deletePost = async (req, res) => {
    const Post = await Postmodels.findById(req.params.id);
    if (!Post) {
        res.json({ message: "ce post n'éxiste pas" });
    }
    await Post.remove();
    res.json("message supprimé" + req.params.id);
}

module.exports.likePost = async (req, res) => {
    try {
        await Postmodels.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: {
                    likers: req.body.userId
                }
            },

            { new: true }
        ).then((data)=> res.send(data))
    } catch (error) {
        res.json(error)
    }
}
module.exports.dislikePost = async (req, res) => {
    try {
        await Postmodels.findByIdAndUpdate(
            req.params.id,
            {
                $pull: {
                    likers: req.body.userId
                }
            },

            { new: true }
        ).then((data)=> res.send(data))
    } catch (error) {
        res.json(error)
    }
}