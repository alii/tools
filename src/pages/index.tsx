import MainLayout from "../layouts/main";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-xl font-bold">tools</h1>
      <a href="https://github.com/alii/tools" className="text-blue-500 underline">
        view on github
      </a>
      <ul className="list-disc">
        <li>
          <Link href="/lookup">discord lookup</Link>
        </li>
        <li>
          <Link href="/json-ts">json to typescript</Link>
        </li>
      </ul>
    </MainLayout>
  );
}
