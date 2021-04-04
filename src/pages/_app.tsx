import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
