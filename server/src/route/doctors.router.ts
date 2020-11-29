import { request, response, Router} from 'express';
import {getRepository} from 'typeorm';

import DoctorsController from '../app/controller/DoctorsController';
import  Doctors from '../app/model/Doctors';

const doctorRouter = Router();


doctorRouter.post('/', async (request, response) => {
    try{
        const { name, specialty } = request.body;
        const doctorController = new DoctorsController();

        const doctor = await doctorController.store({
            name, specialty
        });

        return response.json(doctor);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

doctorRouter.get('/', async(request, response) => {
    const doctorRopository = getRepository(Doctors);
    const doctor = await doctorRopository.find();
    return response.json(doctor); 
})

doctorRouter.delete('/:id', async(request, response) => {
    const doctorRopository = getRepository(Doctors);
    const {id} = request.params;
    await doctorRopository.delete(id);
    return response.send(); 
})


export default doctorRouter;