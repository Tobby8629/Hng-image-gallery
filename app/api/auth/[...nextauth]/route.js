
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials, req) {
        if (credentials.email === "user@example.com" && credentials.password === "1password" ) {
          const res = credentials
          
            return { ...res.user, apiToken: res.token }
      
        } else {
          return null
        }
      }
    })
  ],
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login"
  }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }