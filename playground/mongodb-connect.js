// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Pangeran', age: '22'};
var {name} = user;
console.log(name);

const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'TodoApp';

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('Todos');
//     // Insert some documents
//     collection.insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
// };

const insertDocuments = function(db, callback) {
    
    const collection = db.collection('Users');

    collection.insertOne({
        name: 'Pangeran Christian',
        age: '22',
        location: 'Jakarta'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
};

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
    client.close();
  });
});