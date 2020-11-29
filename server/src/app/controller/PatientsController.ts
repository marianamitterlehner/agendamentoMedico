import {getRepository} from 'typeorm';

import Patients from '../model/Patients';

interface Request {
    name:string;
}

class PatientsController {
    public async store({name}: Request): Promise<Patients> {
        const patientsRepository = getRepository(Patients);

        const patient = patientsRepository.create({
            name
        });

        await patientsRepository.save(patient);
        
        return patient;
    }
}

export default PatientsController;