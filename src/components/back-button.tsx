import Link from 'next/link';
import React from 'react';
import {ArrowLeft} from 'react-feather';

export function BackButton() {
	return (
		<div>
			<Link href="/">
				<a className="px-5 transform py-0.5 inline-block bg-gray-100 text-black hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 dark:hover:text-white rounded-md transition hover:scale-95 ease-in-out dark:bg-gray-800 dark:text-gray-300">
					<ArrowLeft />
				</a>
			</Link>
		</div>
	);
}
