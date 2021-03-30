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
        type="number"
        placeholder="Discord ID"
        className="border border-gray-800 p-2 rounded-md"
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
