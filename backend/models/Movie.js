import mongoose from 'mongoose';
const movieSchema=new mongoose.Schema({title:{type:String,required:true},genre:String,language:String,duration:String,rating:Number,price:{type:Number,default:150},description:String,poster:String,showtimes:[String]},{timestamps:true});
export default mongoose.model('Movie',movieSchema);
