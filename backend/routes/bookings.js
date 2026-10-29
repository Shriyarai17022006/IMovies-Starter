import { Router } from 'express';
import Booking from '../models/Booking.js';
const router=Router();
router.get('/',async(req,res)=>{try{res.json(await Booking.find().sort({createdAt:-1}))}catch(e){res.status(500).json({message:'Could not load bookings'})}});
router.post('/',async(req,res)=>{try{const booking=await Booking.create({bookingId:`IM${Date.now()}`,...req.body});res.status(201).json(booking)}catch(e){res.status(400).json({message:e.message})}});
router.delete('/:id',async(req,res)=>{try{const item=await Booking.findByIdAndDelete(req.params.id);if(!item)return res.status(404).json({message:'Booking not found'});res.json({message:'Booking removed'})}catch(e){res.status(400).json({message:'Invalid booking id'})}});
export default router;
