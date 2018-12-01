import mongoose from 'mongoose';

const mongooseSchema = mongoose.Schema;
const Schema = mongooseSchema;

const UserModel = new Schema({
  name: { type: String },
  age: { type: String },
});

export default mongoose.model('user', UserModel);
