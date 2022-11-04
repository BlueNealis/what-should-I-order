import styles from './form.module.scss'
import { useState } from 'react'
import { PromptBox } from '../../components/promptBox/promptBox'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export default function form() {
  const flavor = {Grapefruit:false,
    Lime: false,
    Strawberry:false,
    Lemon:false,
    "Chocolate":false,
    "Coffee":false,
    "Apple":false,
    "Peach":false,
    "Rose":false,
    "Ginger":false,
    "Elderflower":false,
    "Cranberry":false,
    "Tomato":false,
    "Raspberry":false,
    "Almond":false,
    "Orange":false,
    "Pineapple":false,
    "Oaky":false,
    "Mint":false,
    "Banana":false,
    "Cherry":false,
    "Apricot":false,
    "Passion Fruit":false,
    "Tobasco":false}
  const alcoholType = {"Vodka":false,
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
    "Brandy":false}
  const booziness = {"I don't ew":false,
    "A little":false,
    "A lot":false,
    "I dont want booze":false}
  const handleChange = (e) => {
    console.log("hi",e.target.name)
  }

  return(
    <form>
      <h1>Let's get some preferences</h1>
      <PromptBox
      prompt={"How Much Do You Want To Taste The Booze?"}
      options={booziness}
      handleClick={handleChange}
      id={booziness}/>

      <PromptBox
      prompt={"What type of Booze do you want?"}
      options={alcoholType}
      handleClick={handleChange}
      id={alcoholType}/>

      <PromptBox
      prompt={"What type of flavors do you want?"}
      options={flavor}
      handleClick={handleChange}
      id={flavor}/>
    </form>
  )
}
