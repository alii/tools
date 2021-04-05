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
          className="bg-red-50 text-red-500 placeholder-red-300 h-48 font-mono resize-y rounded-md border hover:border-red-200 transition ease-in-out"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col">
          <Pre>{result.includes("export") ? result : "Waiting for JSON..."}</Pre>

          <div>
            <button className="bg-red-50 text-red-400 w-24 rounded-md" onClick={copy}>
              copy result
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
