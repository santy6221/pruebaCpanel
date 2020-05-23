export interface ModelI {
    
    create(): Promise<any>;
    read?(): Promise<any>;
    update(): Promise<any>;
    del(): any;
}