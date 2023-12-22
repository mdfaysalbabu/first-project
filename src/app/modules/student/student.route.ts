import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewear/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
import auth from '../../middlewear/auth';

const router = express.Router();

router.get('/:id',auth('admin','faculty'), StudentControllers.getSingleStudent);

router.delete('/:id', StudentControllers.deleteStudent);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
