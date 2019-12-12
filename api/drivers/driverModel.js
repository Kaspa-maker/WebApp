import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    linkInsta: String,
    linkBackground: String,
    image: String
})

export default mongoose.model('Drivers',DriverSchema);