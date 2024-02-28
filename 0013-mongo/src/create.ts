import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String,
    },
    email: String,
    birthday: Date,
});

const User = mongoose.model('User', userSchema);

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/mymongo');
    console.log('connected');
    
    const user = new User({
        name: {
            first: 'Shahar',
            last: 'Solomianik'
        },
        email: 'shahar@johnbryce.co.il',
        birthday: new Date('1975-07-18'),
    })

    await user.save();

    console.log('user created, check in mongo');

})()    
