import mongoose, { Schema, model, models } from 'mongoose';
import { IUser } from '../interface';

mongoose.Promise = global.Promise;

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    phone: { type: String },
    balance: { type: Number },
    cummulative_pv: { type: Number },
    current_month_pv: { type: Number },
    account_type: { type: String, required: true },
    referer: { type: String, required: true },
    referals: { type: Array },
});
try {

    delete models.User
} catch (err) {
    console.log(err);
}
const User = model<IUser>('User', UserSchema);

export default User; 