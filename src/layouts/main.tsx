import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl mx-auto mt-4 px-10">{children}</div>;
}
