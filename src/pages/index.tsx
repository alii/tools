import MainLayout from "../layouts/main";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1>Tools</h1>
      <ul className="list-disc">
        <li>
          <Link href="/lookup">Discord Lookup</Link>
        </li>
        <li>
          <Link href="/json-ts">JSON to TypeScript</Link>
        </li>
      </ul>
    </MainLayout>
  );
}
