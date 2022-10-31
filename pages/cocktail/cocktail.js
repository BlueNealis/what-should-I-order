import styles from './Cocktail.module.scss'
import detailView from '../../components/detailView/detailView'
import Head from 'next/head'
import Image from 'next/image'


export default function Cocktail() {
  return(
    <div>
      <Head>
        <title>Order This!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Enriqueta:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className={styles.mainbox}>
        <h1>Seltzer</h1>
      </div>
    </div>
  )
}