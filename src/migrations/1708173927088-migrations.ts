import { MigrationInterface, QueryRunner } from "typeorm";

export class categoryToType1708173927088 implements MigrationInterface {
    name = "categoryToType1708056264579";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE mentions RENAME COLUMN category TO type`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
        "ALTER TABLE `mentions` RENAME COLUMN `type` TO `category`"
        )
    }

}
