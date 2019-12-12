import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    id: Number,
    name:  String,
    description: String,
    link:  String,
    image: String,
  });

export default mongoose.model('Tracks', TrackSchema);