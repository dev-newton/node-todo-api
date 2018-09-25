const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

mongoose.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true }, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //  db.collection('Users').deleteMany({name: 'Newton'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false}).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndDelete({ name: 'Jane'}).then((result) => {
        console.log(result)
    });
    // db.close();
});