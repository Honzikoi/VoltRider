export interface DatabaseConnection {
    connect(): Promise<any>;
    disconnect(): Promise<void>;
    getClient(): any;
}