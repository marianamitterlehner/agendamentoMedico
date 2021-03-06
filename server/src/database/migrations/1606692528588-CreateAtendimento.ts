import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateAtendimento1606692528588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'appointments',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'id_doctor',
                  type: 'uuid',
                  isNullable: true,
                },
                {
                    name: 'id_patient',
                    type: 'uuid',
                    isNullable: true,
                  },
                {
                  name: 'when',
                  type: 'timestamp with time zone',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }))

            await queryRunner.createForeignKey(
                'appointments',
                new TableForeignKey({
                  columnNames: ['id_doctor'],
                  referencedColumnNames: ['id'],
                  referencedTableName: 'doctors',
                  onDelete: 'SET NULL',
                  onUpdate: 'CASCADE',
                }),
              );

              await queryRunner.createForeignKey(
                'appointments',
                new TableForeignKey({
                  columnNames: ['id_patient'],
                  referencedColumnNames: ['id'],
                  referencedTableName: 'patients',
                  onDelete: 'SET NULL',
                  onUpdate: 'CASCADE',
                }),
              );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
