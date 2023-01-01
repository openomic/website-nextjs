import '../public/assets/css/style.css';
import '../styles/globals.css';

import { OpenAPI } from '../data';

import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  
  OpenAPI.BASE = process.env.NEXT_PUBLIC_OPEN_API_BASE!;

  return <Component {...pageProps} />
}
