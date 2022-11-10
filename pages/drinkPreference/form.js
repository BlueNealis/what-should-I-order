import styles from './form.module.scss'
import { useState } from 'react'
import {flavors} from '../../utils/flavors'
import { PromptBox } from '../../components/promptBox/promptBox'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export default function Form() {
  const [allFlavors, setAllFlavors] = useState(flavors)
  const [alcoholType, setAlcoholType] = useState({"Vodka":false,
    "Tequila":false,
    "Gin":false,
    "Whiskey":false,
    "Bourban":false,
    "Scotch":false,
    "Wine":false,
    "Champagne":false,
    "Cider":false,
    "Lager":false,
    "Triple Sec":false,
    "Vermouth":false,
    "Rum":false,
    "Brandy":false})
  const [booziness, setBooziness] = useState({"I don't ew":false,
    "A little":false,
    "A lot":false,
    "I dont want booze":false})
  const [formData, setFormData] = useState({})
  const [promptKey, setPromptKey] = useState(Date.now)

  const handleChange = (e) => {
    if(e.target.name === "alcoholType") {
      let newState = alcoholType
      newState[e.target.value] = !newState[e.target.value]
      updateFormChoices("alcoholType", e.target.value)
      setAlcoholType(newState)
      setPromptKey(Date.now)
    }else if(e.target.name === "flavor") {
      let newState = allFlavors
      newState[e.target.value].state = !newState[e.target.value].state
      updateFormChoices("flavor", e.target.value)
      setAllFlavors(newState)
      setPromptKey(Date.now)
    }else if(e.target.name === "booziness") {
      let newState = booziness
      newState[e.target.value] = !newState[e.target.value]
      updateFormChoices("booziness",e.target.value)
      setBooziness(newState)
      setPromptKey(Date.now)
    }
  }

  const updateFormChoices = (promptType, value) => {
    let oldForm = formData
    oldForm[value]? delete oldForm[value] : oldForm[value] = promptType
    setFormData(oldForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <div className={styles.wrapperForm}>
      <Link href="/">
        <button className={styles.homebutton}>Home</button>
      </Link>
      <form>
        <h1>Let's get some preferences</h1>
        <PromptBox
        key={promptKey+1}
        prompt={"How Much Do You Want To Taste The Booze?"}
        options={booziness}
        handleClick={handleChange}
        id={"booziness"}/>

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
        <Link href={{pathname:'/cocktail/cocktail', query: formData}}>
          <button>Get My Drink</button>
        </Link>
      </form>
    </div>
  )
}
