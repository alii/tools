import MainLayout from "../layouts/main";
import Link from "next/link";
import { GitHub, Twitter } from "react-feather";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-left pt-8 font-bold text-5xl pb-4">
        uwu.<span className="text-red-500">red</span> toolkit
      </h1>
      <div className="flex">
        <div className="flex space-x-2">
          <a href="https://github.com/alii/tools" className="text-black-500 hover:text-red-500 transition ease-in-out">
            <GitHub />
          </a>

          <a
            href="https://twitter.com/aabbccsmith"
            className="text-black-500 hover:text-red-500 transition ease-in-out">
            <Twitter />
          </a>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/lookup">
          <a className="border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md placeholder-red-300 p-3">
            <h1 className="font-semibold text-sm sm:text-regular">Discord ID Lookup</h1>
            <p className="text-xs">Look up Discord ID.</p>
          </a>
        </Link>
        <Link href="/json-ts">
          <a className="block border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md placeholder-red-300 p-3">
            <h1 className="font-semibold text-sm sm:text-regular">JSON to TypeScript object</h1>
            <p className="text-xs">Convert JSON to a TypeScript type object.</p>
          </a>
        </Link>
      </div>
    </MainLayout>
  );
}
