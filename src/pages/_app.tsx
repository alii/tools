import {AnimatePresence, motion} from 'framer-motion';
import {AppProps} from 'next/app';
import Head from 'next/head';
import '../styles/index.css';

export default function App({Component, pageProps, router}: AppProps) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Head>
				<title>toolkit • uwu.red</title>
			</Head>

			<motion.div
				key={router.pathname}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
			>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}
