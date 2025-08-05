"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      Cookies.set("site-auth", password);
      router.push("/");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="space-y-4 text-center">
        <h1 className="text-xl font-bold">Enter Password to Continue</h1>
        <p>Site coming soon!</p>
        <input
          type="password"
          className="border rounded p-2 w-full max-w-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
