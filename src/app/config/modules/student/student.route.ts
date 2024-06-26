import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();
router.post('/create-student', studentController.ceateStudent);
router.get('/', studentController.getAllStudent);
router.get('/:studentId', studentController.getSignleStudent);
export const studentRoute = router;
