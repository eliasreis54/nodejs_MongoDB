import mongoose from 'mongoose';

const connect = mongoose.connect('http://localhost:27017/', {
  useMongoClient: true,
});

export default connect;
