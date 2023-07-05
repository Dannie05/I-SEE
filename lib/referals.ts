import { dbCon } from "../models";
const { DEFAULT_USER } = process.env;
const referers = async (val: string) => {
    const { User } = await dbCon();
    let refs: string[] = [];
    let ref;
    let user;
    let variable_val = val;
    for (let i = 0; i < 5; i++) {
        user = await User.findOne({
            _id: variable_val
        });
        ref = user?.referer;
        if (ref === undefined) {
            ref = DEFAULT_USER;
            refs.push(ref);
            break;
        }
        refs.push(ref);
        variable_val = ref;
    }
    return refs;
}
export default referers;