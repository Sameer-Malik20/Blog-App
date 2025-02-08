const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log('MongoDB connected successfully'.green.bold);
    } catch (e) {
        console.log(`Error: ${e.message}`.red.bold);
        process.exit(1);
    }
}

module.exports = connectDB;