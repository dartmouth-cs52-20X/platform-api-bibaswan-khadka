import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String },
  username: { type: String },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

UserSchema.pre('save', function beforeUserSave(next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next();
});

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  const user = this;
  bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
    if (err) return callback(err);
    return callback(null, isMatch);
  });
};
const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
