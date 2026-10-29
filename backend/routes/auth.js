import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router=Router();
router.post('/register',async(req,res)=>{try{const {name,email,password}=req.body;if(!name||!email||!password)return res.status(400).json({message:'Name, email and password are required'});if(password.length<6)return res.status(400).json({message:'Password must be at least 6 characters'});const exists=await User.findOne({email:email.toLowerCase()});if(exists)return res.status(409).json({message:'Email already registered'});const user=await User.create({name,email:email.toLowerCase(),passwordHash:await bcrypt.hash(password,10)});res.status(201).json({id:user._id,name:user.name,email:user.email})}catch(e){res.status(400).json({message:e.message})}});
router.post('/login',async(req,res)=>{try{const {email,password}=req.body;const user=await User.findOne({email:email?.toLowerCase()});if(!user||!await bcrypt.compare(password||'',user.passwordHash))return res.status(401).json({message:'Invalid email or password'});const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET||'development_only_change_this_secret',{expiresIn:'2h'});res.json({token,user:{id:user._id,name:user.name,email:user.email}})}catch(e){res.status(500).json({message:'Could not sign in'})}});
export default router;
