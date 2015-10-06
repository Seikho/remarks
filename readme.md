### Remarks
Simple two-way conversion and maintenance of JSON comments

### Installation
```
npm install --save remarks
```

### Sample usage

```javascript
/* Optionally takes a JSON string that should be an array */

var remarks;

// Example using knex
knex('post').select().where('id', id)
    .then(post => new Remarks(post.comments))
    .then(r => remarks = r);

// meanwhile, some time later...

remarks.add({ name: 'seikho', comment: 'i love remarks' });

knex('post')
    .update({ comments: remarks.toString() })
    .where('id', 'id');
    .then(() => console.log('updated'));
```

### API
#### constructor
```javascript
constructor(json?: string)
```

#### add
Add a comment to the list of comments
```javascript
function add(comment: T): void;
```

#### parse
Re-populate the array with entirely new comments
```javascript
function parse(json: string): void;
```

#### toArray
Return a copy of the comments array
```javascript
function toArray(): Array<T>;
```

#### toString
Return the comments as a JSON string
```javascript
function toString(): string;
```

### License
MIT