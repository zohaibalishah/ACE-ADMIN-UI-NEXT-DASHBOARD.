"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-500">Authentication Error</h1>
        <p className="text-gray-700 mt-2">
          {error ? decodeURIComponent(error) : "An error occurred. Please try again."}
        </p>
        <Link href="/" className="mt-4 text-blue-500 underline">
          Go back to Login
        </Link>
      </div>
    </div>
  );
}
