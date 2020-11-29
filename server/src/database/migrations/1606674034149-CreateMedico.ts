import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateMedico1606674034149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'doctors',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                    name: 'specialty',
                    type: 'varchar',
                  },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctors');
    }

}


