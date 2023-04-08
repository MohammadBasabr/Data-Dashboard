import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data dashboard</title>
        <meta name="description" content="Data dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
      </main>
    </>
  );
}
