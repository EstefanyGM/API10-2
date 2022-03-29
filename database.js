const mongoose = require ('mongoose');
const URL = 'mongodb+srv://Fany:12345@cluster0.klecw.mongodb.net/test';

mongoose.connect(URL, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conectado con mondo db'))
.catch(err => console.log('Tienes un error: ', err))

module.exports = mongoose;