import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                const isExists = await axios.get(process.env.NEXT_PUBLIC_API + '/users/check', profile.email);
                const res = await isExists.data;

                if(res){
                    // return profile.email_verified && profile.email.endsWith("@example.com")
                    return true;
                }else{
                    axios.post(process.env.NEXT_PUBLIC_API + '/register');

                    return true;
                }
            }
            return true // Do different verification for other providers that don't have `email_verified`
          },
    }
})

export {
    handler as GET,
    handler as POST
}