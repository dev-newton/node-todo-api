const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

mongoose.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true }, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectId('5baa0aa28ef11e4a7458db00')
    // }).toArray().then((docs)=> {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`Todos Count: ${count}`);
    // }, (err)=> {
    //     console.log('Unable to fetch todos', err);
    // });

        db.collection('Users').find({name: 'Newton'}).toArray().then((docs)=> {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=> {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});