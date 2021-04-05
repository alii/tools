import { motion } from "framer-motion";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";
import useSWR from "swr";
import MainLayout from "../layouts/main";
import { ArrowLeft } from "react-feather";

export default function Lookup() {
  const [id, setId] = useState<string | null>(null);
  const { data } = useUser(id);

  const change: ChangeEventHandler<HTMLInputElement> = (event) =>
    setId(event.target.value.trim() || null);

  return (
    <MainLayout>
      <div>
        <Link href="/">
          <a className="inline-block bg-gray-100 text-black hover:text-red-500 hover:bg-red-50 rounded-md transition ease-in-out">
            <ArrowLeft />
          </a>
        </Link>
      </div>
      <input
        type="text"
        placeholder="discord id"
        className="w-48 block bg-red-50 text-red-500 rounded-md placeholder-red-300 px-2 py-1.5"
        value={id ?? ""}
        onChange={change}
      />

      <motion.div style={{ overflow: "hidden" }} initial={{ height: 0 }} animate={{ height: id ? "auto" : "0" }}>
        <div className="p-5 space-y-4 bg-red-50 mt-10">
          {data && (
            <>
              <div className="flex items-center">
                <img
                  src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=2048`}
                  alt={`Avatar for ${data.username}#${data.discriminator}`}
                  className="h-16 w-16 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-4xl font-bold text-red-500">{data.username}</h1>
                  <h2 className="text-2xl font-semibold text-red-300">{data.discriminator}</h2>
                </div>
              </div>

              <div className="space-x-4">
                <div className="inline-block">
                  <h2 className="text-xl font-bold text-red-500">ID</h2>
                  <code className="bg-red-200 p-1 text-red-600 rounded-sm">{data.id}</code>
                </div>

                <div className="inline-block">
                  <h2 className="text-xl font-bold text-red-500">Public Flags</h2>
                  <code className="bg-red-200 p-1 text-red-600 rounded-sm">{data.public_flags}</code>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
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
