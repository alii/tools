import Link from 'next/link';
import {GitHub, Twitter} from 'react-feather';
import MainLayout from '../layouts/main';

export default function Home() {
	return (
		<MainLayout>
			<h1 className="text-left pt-8 font-bold text-5xl pb-4 dark:text-white">
				uwu.<span className="text-red-500">red</span> toolkit
			</h1>
			<div className="flex">
				<div className="flex space-x-2">
					<a
						href="https://github.com/alii/tools"
						className="text-black-500 hover:text-red-500 transition ease-in-out dark:text-white"
					>
						<GitHub />
					</a>

					<a
						href="https://twitter.com/aabbccsmith"
						className="text-black-500 hover:text-red-500 transition ease-in-out dark:text-white"
					>
						<Twitter />
					</a>
				</div>
			</div>

			<div className="mt-4">
				<ToolLink
					to="/lookup"
					title="Discord ID Lookup"
					description="Look up Discord ID"
				/>
				<ToolLink
					to="/json-ts"
					title="JSON to TypeScript object"
					description="Convert JSON to a TypeScript type object"
				/>
				<ToolLink
					to="/crypto"
					title="Crypto Prices"
					description="Check the prices of popular cryptocurrencies"
				/>
				<ToolLink
					to="/linear"
					title="Linear x Discord"
					description="Linear webhooks for Discord"
				/>
				<ToolLink
					to="https://imperialb.in/"
					title="IMPERIAL"
					description="The best hastebin/pastebin alternative ever to exist"
				/>
				<ToolLink
					to="/formatter"
					title="Formatter"
					description="Format your JSON content"
				/>
			</div>
		</MainLayout>
	);
}

function ToolLink(props: {to: string; title: string; description: string}) {
	return (
		<div className="float-left mb-2 mr-2">
			<Link href={props.to}>
				<a className="transform hover:scale-95 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:text-gray-300 shadow-full inline-block border hover:border-red-100 transition ease-in-out bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-md p-3 dark:text-gray-500 dark:bg-gray-800 dark:border-gray-700">
					<h1 className="font-semibold text-sm sm:text-regular">
						{props.title}
					</h1>
					<p className="text-xs">{props.description}</p>
				</a>
			</Link>
		</div>
	);
}
