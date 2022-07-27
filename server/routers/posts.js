import express from 'express';
import {getPosts} from '../controllers/posts.js'
import {createPost} from '../controllers/posts.js'

const router = express.Router();

router.get('/',getPosts);
//http://localhost:5000/posts
router.post('/',createPost);

export default router;