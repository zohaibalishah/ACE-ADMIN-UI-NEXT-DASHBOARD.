import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axiosInstance from '@/lib/api-client';

declare module 'next-auth' {
    interface User {
        phone?: string; // Add the custom 'phone' property
        jwt?: string; // Add the custom 'jwt' property
    }

    interface Session {
        user: User; // Ensure Session.user includes the extended User type
        image?: string;
        phone?: string;
        jwt?: string;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required');
                }
                try {
                    const loginData = {
                        password: credentials.password,
                        email: credentials.email,
                    };

                    const response = await axiosInstance.post('auth/login', loginData);
                    if (response.data.status === 1) {
                        const user = response.data.user;
                        const token = response.data.token;
                        if (user && token) {
                            return {
                                ...user,
                                image: user.profilePic,
                                jwt: token,
                            };
                        }
                    }

                    throw new Error('Invalid credentials');
                } catch (error: any) {
                    throw new Error(error?.message || 'Authentication failed');
                }
            },
        }),
    ],
    pages: {
        signIn: '/',
         error: "/auth/error"
    },
    secret: 'q+jO8xmrhEvWlXhXw/FbFtK5/jP0PCgYTwxFHzajAdY=',
    session: {
        strategy: 'jwt',
    },
    debug: true,
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Ensure redirects go to the dashboard or remain on the same domain
            if (url.startsWith(baseUrl)) return url;
            else if (url.startsWith('/')) return `${baseUrl}${url}`;
            return baseUrl;
          },
        async signIn({ account, profile }) {
            if (account?.provider === 'credentials') {
                return true;
            }

            return false;
        },
        async session({ session, token }) {
            session.user.jwt = typeof token.jwt === 'string' ? token.jwt : undefined;
            session.user.image = typeof token.image === 'string' ? token.image : (typeof token.picture === 'string' ? token.picture : undefined);
            session.user.phone = typeof token.phone === 'string' ? token.phone : undefined;

            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token = {
                    ...token,
                    id: user.id,
                    jwt: user.jwt,
                    phone: user.phone,
                };
            }

            return token;
        },
    },
};
