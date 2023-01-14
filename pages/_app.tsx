import '../public/assets/css/style.css';
import '../styles/globals.css';

import { Fetcher } from 'openapi-typescript-fetch';

import { paths } from '../client';

import type { AppProps } from "next/app";
export const fetcherClient = Fetcher.for<paths>();

export default function App({ Component, pageProps }: AppProps) {
  fetcherClient.configure({
    baseUrl: "https://strapi.openomic.dk/api",
    init: {
      headers: {},
    },
    use: [], // middlewares
  });
  return <Component {...pageProps} />;
}
