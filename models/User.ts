import mongoose, { Schema, model, models } from 'mongoose';
import { IUser } from '../interface';

mongoose.Promise = global.Promise;

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    phone: { type: String },
    balance: { type: Number },
    country:{type:String,required:false},
    address:{type:String,required:false},
});
try {

    delete models.User
} catch (err) {
    console.log(err);
}
const User = model<IUser>('User', UserSchema);

export default User; 