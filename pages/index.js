import Head from 'next/head'
import BottomMenu from '../components/BottomMenu/BottomMenu'

export default function Home() {
  return (
    <>
      <Head>
        <title>amal vincent</title>
        <meta name="description" content="portfolio - amal vincent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <main>
        <BottomMenu />
      </main>
    </>
  )
}
