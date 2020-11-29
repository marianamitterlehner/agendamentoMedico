import {getRepository} from 'typeorm';

import Doctors from '../model/Doctors';

interface Request {
    name:string;
    specialty: string
}

class DoctorsController {
    public async store({name, specialty}: Request): Promise<Doctors> {
        const doctorsRepository = getRepository(Doctors);

        const doctors = doctorsRepository.create({
            name, specialty
        });

        await doctorsRepository.save(doctors);
        
        return doctors;
    }
}

export default DoctorsController;