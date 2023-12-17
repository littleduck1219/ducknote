import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: { signIn: "/i/flow/login", newUser: "/i/flow/signup" },
  // callbacks: {
  //   async authorized({ request, auth }) {
  //     if (!auth) {
  //       return NextResponse.redirect(`http://localhost:3000/i/flow/login`);
  //     }
  //     return true;
  //   },
  // },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.AUTH_URL}/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.username,
              password: credentials.password,
            }),
          },
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return { email: user.id, name: user.nickname };
      },
    }),
  ],
});
