import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateUserEntityNullableFalse1747701275859 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
