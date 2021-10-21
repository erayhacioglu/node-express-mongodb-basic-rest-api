import express from 'express';
const router = express.Router();
import {
	getAllUsers,
	getSingleUser,
	addNewUser,
	updateUser,
	deleteUser,
} from '../controllers/userController.js';

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', addNewUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
