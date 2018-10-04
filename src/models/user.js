import connect from '../../database';

const userSchema = new connect.Schema({
  name: String,
  email: String,
}, { collation: 'user' });

export default userSchema;
