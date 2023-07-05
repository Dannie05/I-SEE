import { dbCon } from "../models";
const ref_reward = async (val: string, reward: number, pv:number = 0) => {
    const { User } = await dbCon();
    let user;
    try {
        user = await User.findOne({ _id: val });
        user.balance += reward;
        user.cummulative_pv += pv;
        await user.save();
        return true
    } catch (err) {
        return false;
    }
}
export default ref_reward;