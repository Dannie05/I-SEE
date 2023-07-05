import NextAuth, { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import AppleProvider from "next-auth/providers/apple";

const { googleClientID } = process.env;
const { googleClientSecret } = process.env;
const { authSecret } = process.env;

const authOptions={
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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "johnDoe" },
        email: { label: "E-mail", type: "email", placeholder: "please enter email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log(credentials);
        const {email,password}=credentials;

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com",image:"https://firebasestorage.googleapis.com/v0/b/moni-3.appspot.com/o/icons%2Ficons8-avatar-96.png?alt=media&token=343ba296-90b4-4840-a2c7-35bc32bfbf59" };

        // const isValidationFailed=true;
        // if(isValidationFailed){
        //   throw new Error("invalid credentials")          
        // }

        return user
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  secret: authSecret,
}

export const getServerAuthSession=(req,res)=>{
  return getServerSession(req, res,authOptions)
}

export default NextAuth(authOptions);
