import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import MainLayout from "../layouts/main";

export default function JSONTypescript() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const transformer = useCallback(async ({ value }) => {
    const { run } = await import("json_typegen_wasm");
    try {
      return run("Root", value, JSON.stringify({ output_mode: "typescript" }));
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
      <Link href="../">back</Link>
      <div className="w-full grid grid-cols-2 gap-10">
        <textarea
          placeholder="paste json here"
          className="bg-red-50 text-red-500 placeholder-red-300 h-48 font-mono"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col">
          <pre>{result}</pre>

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
