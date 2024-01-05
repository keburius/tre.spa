import Header from "@components/components/Header";
import "@components/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/tre.ico"></link>
        <link rel="mask-icon" href="/tre.ico"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
