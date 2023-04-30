import Head from 'next/head'
import BottomMenu from '../components/BottomMenu/BottomMenu'

export default function Main() {
  return (
    <>
      <Head>
        <title>amal vincent</title>
        <meta name="description" content="portfolio - amal vincent" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <BottomMenu />
      </main>
    </>
  )
}
