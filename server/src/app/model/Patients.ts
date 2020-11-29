import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('patients')
class Patients {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}

export default Patients;