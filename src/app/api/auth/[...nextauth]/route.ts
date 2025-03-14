import NextAuth from 'next-auth';
import { authOptions } from './authOptions'; // Adjust the path to match your project structure

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
