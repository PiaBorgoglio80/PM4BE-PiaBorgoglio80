import { DataSource } from 'typeorm';
declare const _default: (() => {
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    verboseRetryLog?: boolean;
    manualInitialization?: boolean;
} & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>) & import("@nestjs/config").ConfigFactoryKeyHost<{
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    verboseRetryLog?: boolean;
    manualInitialization?: boolean;
} & Partial<import("typeorm/driver/postgres/PostgresConnectionOptions").PostgresConnectionOptions>>;
export default _default;
export declare const connectionSource: DataSource;
