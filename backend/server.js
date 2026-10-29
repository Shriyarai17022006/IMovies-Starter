import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import movieRoutes from './routes/movies.js';
import bookingRoutes from './routes/bookings.js';
import authRoutes from './routes/auth.js';
dotenv.config();
const app=express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/api/health',(req,res)=>res.json({status:'ok',app:'IMovies API'}));
app.use('/api/movies',movieRoutes);
app.use('/api/bookings',bookingRoutes);
app.use('/api/auth',authRoutes);
const port=process.env.PORT||5000;
if(process.env.MONGO_URI){
  mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error('MongoDB connection failed:',err.message));
}
app.listen(port,()=>console.log(`IMovies API running on http://localhost:${port}`));
