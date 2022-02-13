import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_ID,
            clientSecret: process.env.AUTH0_SECRET,
            issuer: process.env.AUTH0_ISSUER
        })
    ]
})
