import Base = require('../index.d.ts');

class Remarks<T> implements Base<T> {
    
    constructors(json?: string) {
        this.comments = this.tryParse(json);
    }
    
    comments: Array<T>;
    
    add = (comment: T) => {
        this.comments.push(comment);
    }
    
    parse = (json: string) => {
        this.comments = this.tryParse(json);
    }
        
    toArray = () => {
        return JSON.parse(this.toString());
    }
    
    toString = () => {
        return JSON.stringify(this.comments);
    }
    
    tryParse(json?: string) {
        if (!json) return [];
        
        try {
            var comments = JSON.parse(json);
            
            if (Array.isArray(comments))
                return comments;
            
            throw new Error('Comments did not parse to an array');
        }
        catch (ex) {
            throw new Error(`Unable to parse comments: ${ex.message}`);
        }
    }
}

export = Remarks;