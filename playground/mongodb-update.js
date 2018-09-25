const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;

mongoose.connect('mongodb://localhost:27017/TodoApp', 
{useNewUrlParser: true }, (err, db) => {
    if(err) return console.log('Unable to connect to MongoDB Server');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         //filter
    //     _id: new ObjectId('5baa0219efde9432a87c827e')
    //      }, 
    //     {
    //         //operator
    //         $set: {
    //             completed: false
    //         }
    //     }, 
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate(
        {
            //filter
        _id: new ObjectId('5baa1a5f8ef11e4a7458db0b')
         }, 
        {
            //operator
            $set: {
                name: 'Odigie'
            },
            $inc: {
                age: 1
            }
        }, 
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    })
    // db.close();
});