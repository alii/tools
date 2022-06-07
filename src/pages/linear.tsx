import {useState} from 'react';
import {BackButton} from '../components/back-button';
import MainLayout from '../layouts/main';

export default function Linear() {
	const [webhook, setWebhook] = useState('');

	const isValid = isWebhook(webhook);
	const split = webhook.split('/');

	return (
		<MainLayout>
			<BackButton />
			<ol className="space-y-4 list-decimal">
				<li className="space-y-4">
					<span>Create a Discord Webhook</span>
					<ol className="list-decimal list-inside">
						<li>Open Discord</li>
						<li>
							Open channel settings for the channel you want to receive
							notifications in
						</li>
						<li>Hit "integrations" and then "webhooks"</li>
						<li>
							Create a new webhook. Name it whatever you want and set the
							profile picture
						</li>
						<li>Copy the webhook URL</li>
						<li className="space-x-2">
							<span>Paste it here:</span>
							<input
								type="text"
								value={webhook}
								onChange={e => setWebhook(e.target.value)}
								placeholder="https://discord.com/api/..."
								className="border-b border-gray-50 text-red-500 bg-red-500 bg-opacity-20 px-2 py-0.5"
							/>
						</li>
					</ol>
				</li>
				{isValid && (
					<li>
						Add webhook to linear
						<ol className="list-decimal list-inside">
							<li>Open linear</li>
							<li>Go to Team Settings - Webhooks - New Webhook</li>
							<li>
								Paste in this URL:{' '}
								<code className="text-red-500 bg-red-500 bg-opacity-20">
									https://lds.alistair.cloud/api/discord?id={split[5]}&token=
									{split[6]}
								</code>
							</li>
							<li>Press "Create Webhook"</li>
						</ol>
					</li>
				)}
			</ol>
		</MainLayout>
	);
}

/**
 * Checks if a webhook is valid
 * @param {string} webhook The webhook
 * @returns {boolean}
 */
function isWebhook(webhook: string) {
	return (
		webhook.startsWith('https://discord') &&
		webhook.includes('.com/api/webhook')
	);
}
