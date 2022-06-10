import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654883559428 implements MigrationInterface {
    name = 'init1654883559428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "course" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "course"`);
    }

}
