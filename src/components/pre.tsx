import {DetailedHTMLProps, HTMLAttributes} from 'react';

export function Pre(
	props: Omit<
		DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
		'className'
	>,
) {
	return (
		<pre
			{...props}
			className="rounded-md border border-gray-100 dark:border-gray-700 text-red-500 bg-gray-50 dark:bg-gray-800 p-5 inline-block"
		/>
	);
}
