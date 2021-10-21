import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
        });
        console.log('Db connected...');
    } catch (error) {
        console.error('Db connection error : ' + error);
    }
}

export default dbConnection;