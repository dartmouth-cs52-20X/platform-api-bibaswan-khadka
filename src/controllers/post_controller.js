import Post from '../models/post_model';

export const createPost = (req, res) => {
  const post = new Post();
  post.title = req.body.title;
  post.tags = req.body.tags.split(' ');
  post.content = req.body.content;
  post.coverUrl = req.body.coverUrl;
  post.date = new Date().toDateString();
  post.author = req.user;
  post.save()
    .then((result) => {
      res.json({ message: 'Post created!' });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPosts = (req, res) => {
  Post.find({}).sort({ createdAt: -1 }).populate('author')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
export const getPost = (req, res) => {
  Post.findById(req.params.id).populate('author')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json(`No post with id ${req.params.id}`);
    });
};
export const deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({ message: 'delete success' });
    })
    .catch((error) => {
      res.status(500).json(`No post with id ${req.params.id}`);
    });
};
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json(`No post with id ${req.params.id}`);
    });
};
