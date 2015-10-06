declare class Remarks<T> {
    constructor(json?: string);
    
    add(comment: T): void;    
    
    parse(json?: string): void;
    
    toArray(): Array<T>;
    
    toString(): string;
}

export { Remarks as default };