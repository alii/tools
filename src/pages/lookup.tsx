import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import MainLayout from "../layouts/main";

export default function Lookup() {
  const [id, setId] = useState<string | null>(null);
  const { data } = useUser(id);

  return (
    <MainLayout>
      <Link href="/">back</Link>
      <h1>Discord Lookup</h1>
      <input
        type="text"
        placeholder="Discord ID"
        className="w-48 bg-red-50 text-red-500 rounded-md placeholder-red-300 px-2 py-1.5"
        value={id ?? ""}
        onChange={(v) => setId(v.target.value)}
      />
      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </MainLayout>
  );
}

function useUser(id: string | null) {
  return useSWR<User>(id ? `/api/lookup?id=${id}` : null);
}

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
}
