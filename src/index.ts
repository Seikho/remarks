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
        return this.toArray();
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
            
        }
        catch (ex) {
            return null;
        }
    }
}

export = Remarks;