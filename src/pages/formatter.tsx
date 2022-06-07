import React, {useState} from 'react';
import {BackButton} from '../components/back-button';
import {Pre} from '../components/pre';
import MainLayout from '../layouts/main';

export default function Formatter() {
	const [value, setValue] = useState('');

	return (
		<MainLayout>
			<BackButton />

			<div className="w-full grid grid-cols-2 gap-10">
				<textarea
					placeholder="Paste anything here"
					className="p-4 bg-red-50 text-red-500 placeholder-red-300 h-48 font-mono resize-y rounded-md border transition ease-in-out dark:bg-gray-800 dark:border-gray-700"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>

				<Value value={value} />
			</div>
		</MainLayout>
	);
}

function Value(props: {value: string}) {
	if (props.value === '') {
		return <Pre>No Content</Pre>;
	}

	try {
		return <Pre>{JSON.stringify(JSON.parse(props.value), null, 4)}</Pre>;
	} catch (e) {
		return (
			<>
				<Pre>Invalid JSON</Pre>
				<p>{(e as Error).message}</p>
			</>
		);
	}
}
