import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/posts').post(Posts.createPost);
router.route('/posts').get(Posts.getPosts);

router.route('/posts/:id').get(Posts.getPost);
router.route('/posts/:id').put(Posts.updatePost);
router.route('/posts/:id').delete(Posts.deletePost);

export default router;
