const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboper= require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client)=>{
    
    assert.strictEqual(err, null);

    console.log('Connect correctly to the server');
    const db = client.db(dbname);
    dboper.insertDocument(db, {name : "Vadount", description: 'Test'}, 'dishes', (result)=>{

        console.log('Inserted Document :\n', result.ops);
        
        dboper.findDocument(db, 'dishes', (docs)=>{
            console.log('Found Documnets:\n', docs);

            dboper.updateDocument(db, {name: 'Vadonut'}, {description: 'Updated Test'}, 'dishes', (result)=>{
                console.log('Updates Document:\n', result.result);

                dboper.findDocument(db, 'dishes',(docs)=>{
                    console.log('Found Documnets:\n', docs);
                    
                    db.dropCollection('dishes',(result)=>{
                        console.log('Dropped the collection :', result);

                        client.close();
                    })

                });
            });
        })

    });
});