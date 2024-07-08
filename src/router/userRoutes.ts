import { Router } from 'express';
import { createUser, findById, getUsers } from '../controllers/userController';
const router = Router();

router.get ('/', getUsers);
router.get('/:id', findById);
router.post ('/', createUser);



export default router;
