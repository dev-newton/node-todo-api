const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

// var obj = new ObjectId();
// console.log(obj);

mongoose.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true }, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB Server');

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //         text: 'Something to do',
    //         completed: false
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert todo');

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //  db.collection('Users').insertOne({
    //         name: 'Newton',
    //         age: 22,
    //         location: 'Jos'
    // }, (err, result) => {
    //     if (err) return console.log('Unable to insert todo');

    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    // db.close();
});