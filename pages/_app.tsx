import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { OpenAPI } from "../data"

export default function App({ Component, pageProps }: AppProps) {
  
  OpenAPI.BASE = process.env.NEXT_PUBLIC_OPEN_API_BASE!;

  return <Component {...pageProps} />
}
