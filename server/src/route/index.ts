import {response, Router} from 'express';

import patientsRouter from './patients.router';
import doctorsRouter from './doctors.router';

const routes = Router();

routes.use('/patients', patientsRouter);
routes.use('/doctors', doctorsRouter);


export default routes;