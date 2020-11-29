import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('doctors')
class Doctors {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    specialty: string;
}

export default Doctors;