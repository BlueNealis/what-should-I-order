import styles from './form.module.scss'
import { useState, useEffect } from 'react'
import {flavors, alcohols} from '../../utils/flavors'
import { PromptBox } from '../../components/promptBox/promptBox'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export default function Form() {
  const [allFlavors, setAllFlavors] = useState(flavors)
  const [alcoholType, setAlcoholType] = useState(alcohols)
  const [formData, setFormData] = useState([])
  const [promptKey, setPromptKey] = useState(Date.now)

  useEffect(() => {
    setPromptKey(Date.now)
  },[])

  const handleChange = (e) => {
    if(e.target.name === "alcoholType") {
      let newState = alcoholType
      newState[e.target.value].state = !newState[e.target.value].state
      updateFormChoices("alcoholType", e.target.value)
      setAlcoholType(newState)
      setPromptKey(Date.now)
    }else if(e.target.name === "flavor") {
      let newState = allFlavors
      newState[e.target.value].state = !newState[e.target.value].state
      updateFormChoices("flavor", e.target.value)
      setAllFlavors(newState)
      setPromptKey(Date.now)
    }
  }

  const updateFormChoices = (promptType, value) => {
    let newForm = formData
    newForm.includes(value)? newForm.splice(oldForm.indexOf(value, 1)) : newForm.push(value)
    setFormData(newForm)
  }

  const handleSubmit = (e) => {
    setAllFavors(flavors)
    setAlcoholType(alcohols)
  }

  return(
    <div className={styles.wrapperForm}>
      <Link href="/">
        <button className={styles.homebutton}>Home</button>
      </Link>
      <form>
        <h1>Let's get some preferences</h1>

        <PromptBox
        key={promptKey+2}
        prompt={"What type of Booze do you want?"}
        options={alcoholType}
        handleClick={handleChange}
        id={"alcoholType"}/>

        <PromptBox
        key={promptKey+3}
        prompt={"What type of flavors do you want?"}
        options={allFlavors}
        handleClick={handleChange}
        id={"flavor"}/>

      {  // <PromptBox
        // key={promptKey+4}
        // prompt={"Should it be an 'Official' Drink?"}
        // options={{Yes: false, Nah: false}}
        // handleClick={handleChange}
        // id={"IBA"}/>
      }
        <Link href={{pathname:'/cocktail/cocktail', query: formData}}>
          <button className={styles.drinkButton}>Get My Drink</button>
        </Link>
      </form>
    </div>
  )
}
