 import express from 'express'
 import dotenv from 'dotenv';
 import cors from 'cors';
import AuthRoutes from './routes/AuthRoutes.js ';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',AuthRoutes)


const port = process.env.PORT;
const server = app.listen(port,(req,res)=>{
    console.log(`server started on ${port}`);
})