import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/index.css";
import "tailwindcss/tailwind.css";

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
