import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { ArrowLeft } from "react-feather";
import { BackButton } from "../components/back-button";
import { Pre } from "../components/pre";
import MainLayout from "../layouts/main";

export default function JSONTypescript() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const transformer = useCallback(async ({ value }) => {
    const { run: compile } = await import("json_typegen_wasm");

    try {
      return compile(
        "Root",
        value,
        JSON.stringify({
          output_mode: "typescript",
        })
      );
    } catch (_) {
      return "";
    }
  }, []);

  useEffect(() => {
    transformer({ value }).then(setResult);
  }, [value]);

  const copy = () => {
    void navigator.clipboard.writeText(result);
  };

  return (
    <MainLayout>
      <BackButton />
      <div className="w-full grid grid-cols-2 gap-10">
        <textarea
          placeholder="Paste json here"
          className="p-4 bg-red-50 text-red-500 placeholder-red-300 h-48 font-mono resize-y rounded-md border transition ease-in-out dark:bg-gray-800 dark:border-gray-700"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col">
          <Pre>{result.includes("export") ? result : "Waiting for JSON..."}</Pre>

          <div>
            <button
              className="bg-red-50 text-red-500 px-5 py-0.5 rounded-md mt-2 dark:bg-gray-800 dark:text-gray-500 transform transition hover:scale-95"
              onClick={copy}>
              Copy Result
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
