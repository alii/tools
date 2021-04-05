import { useState } from "react";
import useSWR from "swr";
import { BackButton } from "../components/back-button";
import { Pre } from "../components/pre";
import MainLayout from "../layouts/main";

const currencies = ["ETH", "BTC", "XRP"] as const;
type Currency = typeof currencies[number];

export default function Crypto() {
  const [currency, set] = useState<Currency>("ETH");
  const { data } = useCrypto(currency);

  return (
    <MainLayout>
      <BackButton />
      <select value={currency} onChange={(v) => set(v.target.value as Currency)}>
        {currencies.map((currency) => {
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
  }>(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD,EUR,CNY,JPY,GBP`, {
    refreshInterval: 120 * 1000,
    dedupingInterval: 120 * 1000,
    errorRetryInterval: 120 * 1000,
    focusThrottleInterval: 120 * 1000,
  });
}
