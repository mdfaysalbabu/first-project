import express from 'express';

import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidations } from './semesterRegistration.validation';
import validateRequest from '../../middlewear/validateRequest';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch(
  '/:id',
  validateRequest(
    SemesterRegistrationValidations.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.delete(
  '/:id',
  SemesterRegistrationController.deleteSemesterRegistration,
);

export const semesterRegistrationRoutes = router;
