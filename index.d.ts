declare class Remarks<T> {
    constructor(json?: string);
    
    add(comment: T): void;    
    
    parse(json?: string): Array<T>;
    
    toArray(): Array<T>;
    
    toString(): string;
}

export = Remarks;