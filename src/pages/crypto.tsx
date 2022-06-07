import {useState} from 'react';
import useSWR from 'swr';
import {BackButton} from '../components/back-button';
import {Pre} from '../components/pre';
import MainLayout from '../layouts/main';

const currencies = [
	'ETH',
	'BTC',
	'XRP',
	'DOT',
	'ADA',
	'LTC',
	'BCH',
	'XLM',
	'DOGE',
] as const;
type Currency = typeof currencies[number];

export default function Crypto() {
	const [currency, set] = useState<Currency>('ETH');
	const {data} = useCrypto(currency);

	return (
		<MainLayout>
			<BackButton />
			<select
				value={currency}
				onChange={v => set(v.target.value as Currency)}
				className="w-46 inline-block bg-gray-100 border border-gray-200 rounded-md px-4 pl-0.5 py-0.5 dark:bg-gray-800 mb-2 dark:border-gray-700 dark:text-gray-300"
			>
				{currencies.map(currency => {
					return (
						<option value={currency} key={currency}>
							{currency}
						</option>
					);
				})}
			</select>
			<div>
				<Pre>{JSON.stringify(data, null, 4)}</Pre>
			</div>
		</MainLayout>
	);
}

function useCrypto(currency: Currency) {
	return useSWR<{
		USD: number;
		EUR: number;
		CNY: number;
		JPY: number;
		GBP: number;
	}>(`/api/crypto?symbol=${currency}`, {
		refreshInterval: 120 * 1000,
		dedupingInterval: 120 * 1000,
		errorRetryInterval: 120 * 1000,
		focusThrottleInterval: 120 * 1000,
	});
}
