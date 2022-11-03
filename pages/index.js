import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import cocktails from '../public/images/CocktailsMain.png'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.box}>
      <Head>
        <title>What Drink Should I Order?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Enriqueta:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <h1 className={styles.header}> What Drink Should I Order? </h1>
      <p className={styles.subheader}>cocktail suggestions for the indecisive</p>
      <Image src={cocktails} width={500} height={300} alt='Three cocktails'/>
      <div className={styles.actionBox}>
      <Link href='cocktail/cocktail'>
        <button className={styles.button}>Give Me a Random One!</button>
      </Link>
      <Link href='drinkPreference/form'>
        <button className={styles.button}>I have some preferences...</button>
      </Link>
      </div>
    </div>
  )
}
