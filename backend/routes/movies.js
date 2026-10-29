import { Router } from 'express';
import Movie from '../models/Movie.js';
const router=Router();
router.get('/',async(req,res)=>{try{const movies=await Movie.find().sort({title:1});res.json(movies)}catch(e){res.status(500).json({message:'Could not load movies'})}});
router.post('/',async(req,res)=>{try{const movie=await Movie.create(req.body);res.status(201).json(movie)}catch(e){res.status(400).json({message:e.message})}});
export default router;
