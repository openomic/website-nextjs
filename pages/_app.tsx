import '../public/assets/scss/style.scss';
import '../styles/globals.scss';

import { Configuration } from '../data';

import type { AppProps } from "next/app";
export const MY_AXIOS_CONFIG = new Configuration();
MY_AXIOS_CONFIG.basePath = process.env.NEXT_PUBLIC_OPEN_API_BASE!;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
