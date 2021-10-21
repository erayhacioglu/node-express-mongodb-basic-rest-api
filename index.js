import express from 'express';
const app = express();
import dotenv from 'dotenv';
import dbConnection from './helpers/dbConnection.js';
import userRouter from './routes/userRouter.js';


dotenv.config();
dbConnection();

app.use(express.json());

//routes
app.use('/api/users', userRouter);

//listening to the server
const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`Server listening on port ${Port}`));
