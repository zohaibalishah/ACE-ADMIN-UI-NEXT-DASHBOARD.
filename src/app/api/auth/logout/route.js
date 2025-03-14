import { authOptions } from "../[...nextauth]/route"; // Adjust to the actual path
import { getServerSession } from "next-auth/next";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: "No active session found" }), { status: 401 });
  }

  try {
    // Clear the session cookie by redirecting to the built-in signOut endpoint
    const logoutURL = new URL("/api/auth/signout", request.url);
    logoutURL.searchParams.set("callbackUrl", "/"); // Redirect after logout

    return new Response(null, { status: 302, headers: { Location: logoutURL.toString() } });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error logging out", error: error.message }), {
      status: 500,
    });
  }
}
