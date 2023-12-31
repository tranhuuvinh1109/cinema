import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Footer, Header, Poster, Spotlight, TrailerMovie } from '../src/components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='w-full'>
        <Header />
      </header>
      <main className={styles.main} >
        <Poster />
        <Spotlight />
        <TrailerMovie />
      </main>
      <Footer />
    </div>
  )
}

export default Home
