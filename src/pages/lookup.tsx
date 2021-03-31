import Link from "next/link";
import { ChangeEventHandler, useEffect, useState } from "react";
import useSWR from "swr";
import MainLayout from "../layouts/main";

export default function Lookup() {
  const [id, setId] = useState<string | null>(null);
  const { data } = useUser(id);

  const change: ChangeEventHandler<HTMLInputElement> = (event) => {
    setId(event.target.value.trim() === "" ? null : event.target.value);
  };

  return (
    <MainLayout>
      <Link href="/">back</Link>

      <input
        type="text"
        placeholder="discord id"
        className="w-48 block bg-red-50 text-red-500 rounded-md placeholder-red-300 px-2 py-1.5"
        value={id ?? ""}
        onChange={change}
      />
      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </MainLayout>
  );
}

function useUser(id: string | null) {
  return useSWR<User>(id ? `/api/lookup?id=${id}` : null, {
    refreshInterval: 120 * 1000,
    dedupingInterval: 120 * 1000,
    errorRetryInterval: 120 * 1000,
    focusThrottleInterval: 120 * 1000,
  });
}

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
}
