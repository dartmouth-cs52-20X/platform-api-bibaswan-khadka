import { Router } from 'express';
import * as Posts from './controllers/post_controller';
import * as UserController from './controllers/user_controller';
import { requireAuth, requireSignin } from './services/passport';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/posts').post(requireAuth, Posts.createPost);
router.route('/posts').get(Posts.getPosts);

router.route('/posts/:id').get(Posts.getPost);
router.route('/posts/:id').put(requireAuth, Posts.updatePost);
router.route('/posts/:id').delete(requireAuth, Posts.deletePost);

router.post('/signin', requireSignin, UserController.signin);
router.post('/signup', UserController.signup);
export default router;
