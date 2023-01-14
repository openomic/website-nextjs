import '../public/assets/scss/style.scss';
import '../styles/globals.css';

import { Fetcher } from 'openapi-typescript-fetch';

import { paths } from '../client';

import type { AppProps } from "next/app";
export const fetcherClient = Fetcher.for<paths>();

export default function App({ Component, pageProps }: AppProps) {
  fetcherClient.configure({
    baseUrl: process.env.NEXT_PUBLIC_OPEN_API_BASE!,
    init: {
      headers: {},
    },
    use: []
  });
  return <Component {...pageProps} />;
}
