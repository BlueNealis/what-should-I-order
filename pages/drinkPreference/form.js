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
  const handleChange = (e) => {
    console.log("hi",e.target.name)
  }

  return(
    <form>
      <h1>Let's get some preferences</h1>
      <PromptBox
      prompt={"How Much Do You Want To Taste The Booze?"}
      options={[{name: "I don't ew", checked: false},
      {name:"A little", checked:false},
      {name:"A lot", checked:false},
      {name:"I don't want booze", checked:false}]}
      handleClick={handleChange}
      id={4}/>

      <PromptBox
      prompt={"What type of Booze do you want?"}
      options={[{name: "Vodka", checked: false},
      {name:"Tequila", checked:false},
      {name:"Gin", checked:false},
      {name:"Whiskey", checked:false},
      {name:"Bourban", checked:false},
      {name:"Scotch", checked:false},
      {name:"Wine", checked:false},
      {name:"Champagne", checked:false},
      {name:"Cider", checked:false},
      {name:"Lager", checked:false},
      {name:"Triple Sec", checked:false},
      {name:"Vermouth", checked:false},
      {name:"Rum", checked:false},
      {name:"Brandy", checked:false}
    ]}
      handleClick={handleChange}
      id={5}/>

      <PromptBox
      prompt={"What type of flavors do you want?"}
      options={flavor}
      handleClick={handleChange}
      id={6}/>
    </form>
  )
}
