import mongoose from 'mongoose';
const bookingSchema=new mongoose.Schema({bookingId:{type:String,required:true,unique:true},movieTitle:{type:String,required:true},customerName:{type:String,required:true},email:{type:String,required:true},showDate:{type:String,required:true},showTime:{type:String,required:true},seats:[String],total:{type:Number,required:true}},{timestamps:true});
export default mongoose.model('Booking',bookingSchema);
