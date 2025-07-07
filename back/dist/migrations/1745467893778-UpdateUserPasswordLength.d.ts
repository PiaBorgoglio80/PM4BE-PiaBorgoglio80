import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateUserPasswordLength1745467893778 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
