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
          <GitHub className="text-black-500 hover:text-red-500 transition ease-in-out" />
          <span>
            <Twitter />
            pog
          </span>
        </div>
      </div>

      <div className="flex mt-4">
        <ul className="list-disc">
          <Link href="/lookup">
            <a className="block w-auto border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md placeholder-red-300 p-3">
              <div>
                <div className="">
                  <h1 className="font-semibold text-sm sm:text-regular">
                    Discord ID Lookup
                  </h1>
                  <p className="text-xs">Look up Discord ID.</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/json-ts">
            <a className="block flex mt-4">
              <div className="w-auto border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md placeholder-red-300 p-3">
                <div>
                  <div className="">
                    <h1 className="font-semibold text-sm sm:text-regular">
                      JSON to TypeScript object
                    </h1>
                    <p className="text-xs">
                      Convert JSON to a TypeScript type object.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </ul>
      </div>
    </MainLayout>
  );
}
