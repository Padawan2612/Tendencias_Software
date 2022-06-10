import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654819201049 implements MigrationInterface {
    name = 'init1654819201049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "date_creation" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "date_finish" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "date_finish"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "date_creation"`);
    }

}
