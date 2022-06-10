import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654887133278 implements MigrationInterface {
    name = 'init1654887133278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "example" ADD "age1" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "example" DROP COLUMN "age1"`);
    }

}
