import styles from './Cocktail.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DetailView from '../../components/detailView/detailView'
import Head from 'next/head'
import Image from 'next/image'


export default function Cocktail() {
  const router = useRouter();
  const [data, setData] = useState(router.query);
  const [id, setId] = useState(Date.now())
  const [href, setHref] = useState('/drinkPreference/form')
  const [buttonText, setButtonText] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (e) => {
    if(e.target.name === 'randomButton'){
      setData({})
      setId(Date.now())
  } else if(e.target.name === 'preferenceButton') {
      setId(Date.now())
  }

  }

  const handleNoMatch = (preferences) => {
    setData({})
    setId(Date.now())
    setErrorMessage(`Sorry we didnt find a drink with ${preferences} here's a random one instead!`)
  }

  useEffect(() => {
    if(Object.keys(data).length > 0) {
      setHref(window.location.href)
      setButtonText('Same Preferences Different Drink..')
    }else{
      setButtonText('Actually I have Some Preferences')
    }
  }, [])

  const renderBackToOptionsButton = () => {
    if(Object.keys(data).length > 0) {
      return (<Link href={'/drinkPreference/form'}>
        <button className={styles.formbutton}>Back To Options</button>
      </Link>)
    }
  }

  return(
    <>
      <Head>
        <title>Order This!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Enriqueta:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Link href="/">
        <button className={styles.homebutton}>Home</button>
      </Link>
      {renderBackToOptionsButton()}
      <div className={styles.mainbox}>
        <p>{errorMessage}</p>
        <DetailView data={data} key={id} handleNoMatch={handleNoMatch}/>
        <div className={styles.actionBox}>
          <button onClick={ e => handleClick(e)}name='randomButton' className={`${styles.button} ${styles.buttonLeft}`}>Give Me A Random One!</button>
        <Link href={href}>
          <button onClick={ e => handleClick(e)} className={`${styles.button} ${styles.buttonRight}`} name='preferenceButton'>{buttonText}</button>
        </Link>
        </div>
      </div>
    </>
  )
}
