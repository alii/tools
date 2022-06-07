import {motion} from 'framer-motion';
import {ChangeEventHandler, useState} from 'react';
import useSWR from 'swr';
import {BackButton} from '../components/back-button';
import MainLayout from '../layouts/main';
import {UserFlags} from 'discord-api-types/v10';

console.log(UserFlags);

export default function Lookup() {
	const [id, setId] = useState<string | null>(null);
	const {data} = useUser(id);

	const change: ChangeEventHandler<HTMLInputElement> = event =>
		setId(event.target.value.trim() || null);

	return (
		<MainLayout>
			<BackButton />
			<input
				type="text"
				placeholder="User ID"
				className="mt-1 w-56 text-center block bg-red-50 text-red-500 rounded-md placeholder-red-300 px-2 py-1.5 dark:placeholder-gray-300 dark:bg-gray-800 border border-red-200 dark:border-gray-700 dark:text-gray-200"
				value={id ?? ''}
				onChange={change}
			/>

			<motion.div
				style={{overflow: 'hidden'}}
				initial={{height: 0}}
				animate={{height: id ? 'auto' : '0'}}
			>
				<div className="p-5 space-y-4 bg-red-50 mt-2 dark:bg-gray-800 border border-red-200 rounded-md dark:border-gray-700">
					{data && (
						<>
							<div className="flex items-center">
								<img
									src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=2048`}
									alt={`Avatar for ${data.username}#${data.discriminator}`}
									className="h-16 w-16 rounded-full"
								/>
								<div className="ml-4">
									<h1 className="text-4xl font-bold text-red-500">
										{data.username}
									</h1>
									<h2 className="text-2xl font-semibold text-red-300">
										{data.discriminator}
									</h2>
								</div>
							</div>

							<div className="space-x-4">
								<div className="inline-block">
									<h2 className="text-xl font-bold text-red-500">ID</h2>
									<code className="bg-red-200 p-1 text-red-600 rounded-sm">
										{data.id}
									</code>
								</div>

								<div className="inline-block">
									<h2 className="text-xl font-bold text-red-500">
										Public Flags
									</h2>
									<code className="bg-red-200 p-1 text-red-600 rounded-sm">
										<Flags flags={data.public_flags} />
									</code>
								</div>
							</div>
						</>
					)}
				</div>
			</motion.div>
		</MainLayout>
	);
}

function Flags({flags}: {flags: number}) {
	return <>{flags}</>;
}

function useUser(id: string | null) {
	return useSWR<User>(id ? `/api/lookup?id=${id}` : null, {
		refreshInterval: 120 * 1000,
		dedupingInterval: 120 * 1000,
		errorRetryInterval: 120 * 1000,
		focusThrottleInterval: 120 * 1000,
	});
}

interface User {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
}
