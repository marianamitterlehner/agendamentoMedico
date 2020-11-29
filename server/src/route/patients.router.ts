import { request, response, Router} from 'express';
import {getRepository} from 'typeorm';

import PatientsController from '../app/controller/PatientsController';
import  Patients from '../app/model/Patients';

const patientsRouter = Router();


patientsRouter.post('/', async (request, response) => {
    try{
        const { name } = request.body;
        const patientsController = new PatientsController();

        const patient = await patientsController.store({
            name
        });

        return response.json(patient);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

patientsRouter.get('/', async(request, response) => {
    const patientsRopository = getRepository(Patients);
    const patients = await patientsRopository.find();
    return response.json(patients); 
})

patientsRouter.delete('/:id', async(request, response) => {
    const patientsRopository = getRepository(Patients);
    const {id} = request.params;
    await patientsRopository.delete(id);
    return response.send(); 
})


export default patientsRouter;