import mongoose, { Schema, model, models } from 'mongoose';
import { IAccounts } from '../interface';

mongoose.Promise = global.Promise;
const AccountSchema: Schema = new Schema({
    name: { type: String, unique: true, required: true },
    amount: { type: Number },
    welcome_bonus: { type: Number },
    point_value: { type: Number }
});
try {
    delete models.Accounts
} catch (err) {
    console.log(err);
}
const Accounts = model<IAccounts>('Accounts', AccountSchema);
export default Accounts;