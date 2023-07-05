
export interface IAccounts extends Document {
    name: string;
    amount: number;
    welcome_bonus: number;
    point_value: number;
}
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    referer: string;
    account: string;
    username: string;
    phone?: string;
    balance?: number;
    cummulative_pv?: number;
    current_month_pv?: number;
    account_type?: string;
    referals?: Array<string>;

}
export interface ResponseFunctions {
    GET?: Function;
    POST?: Function;
  }