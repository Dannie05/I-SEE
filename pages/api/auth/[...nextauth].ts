import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { dbCon } from "../../../models";
import { NextAuthOptions } from "next-auth";
import SendMail from './../../../lib/send-mail';
import GoogleProvider from "next-auth/providers/google";


const { googleClientID, mongoDBUri } = process.env;
const { googleClientSecret } = process.env;
const { authSecret } = process.env;


const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 50000,
        updateAge: 80,
    },
    providers: [
      GoogleProvider({
        clientId: googleClientID,
        clientSecret: googleClientSecret,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
          },
        },
      }),

        CredentialsProvider({
            type: "credentials",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Recharge",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {},

            async authorize(credentials, req) {

                // Add logic here to look up the user from the credentials supplied
                const { User } = await dbCon();
                  const {password} = req.body;
                  const {email} = req.body;
                  const username: string = email.toLowerCase()
                let user;
                try{
                    user = await User.findOne({
                       $or: [
                           { email: email },
                           { username: username }
                         ],
                       password: password
                   })
                }catch(err){
                    user = null;
                }
                // Any object returned will be saved in `user` property of the JWT
                if (user !== null) {
                    // This function will be called anytime to send mails
                    //   await SendMail(user.email);
                    return {
                        id: `${user._id}`,
                        email: user.email,
                        name: user.name
                    }
                } else {
                    throw new Error(`Invalid credentials`);
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        // newUser: "/signup",
        // verifyRequest: "api/verify",
        // error: "",
        // signOut: ""
    },
    secret: authSecret,
    jwt: {

    }
}
export default NextAuth(authOptions);


