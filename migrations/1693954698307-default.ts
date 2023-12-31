import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693954698307 implements MigrationInterface {
    name = 'Default1693954698307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "material"`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_material_enum" AS ENUM('alluminum', 'carbon', 'iron')`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "material" "public"."bikes_material_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "material"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_material_enum"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "material" character varying(20) NOT NULL`);
    }

}
