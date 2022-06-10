import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654885572752 implements MigrationInterface {
    name = 'init1654885572752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "example" ("id" SERIAL NOT NULL, "name_student" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, "asignature" character varying NOT NULL, "age" integer NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "name_student"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "asignature"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "asignature" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "name_student" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "example"`);
    }

}
