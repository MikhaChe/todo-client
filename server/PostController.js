import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const {urgency, check, selectMenu, body, picture} = req.body;
      const post = await Post.create({urgency, check, selectMenu, body, picture});
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e)
    }  
  }

  async getOne(req, res) {
    try {
      const {id} = req.params;
      if(!id) {
        res.status(400).json({message: 'Id does not exist'})
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json({message: `Id does not exist`})
    }  
  }

  async update(req, res) {
    try {
      const post = req.body;
      console.log(post);
      if(!post._id) {
        res.status(400).json({message: 'Id does not exist'});
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post,  {new: true});
      console.log('It\'s empty!');
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async delete(req, res) {
    try {
      const {id} = req.params;
      if(!id) {
        res.status(400).json({message: 'Id does not exist'})
      }
      const postDelete = await Post.findByIdAndDelete(id);
      return res.json(postDelete);
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new PostController();