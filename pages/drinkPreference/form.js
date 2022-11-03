import styles from './form.module.scss'
import { useState } from 'react'
import { PromptBox } from '../../components/promptBox/promptBox'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export default function form() {
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
      id={1}/>

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
      id={2}/>

      <PromptBox
      prompt={"What type of flavors do you want?"}
      options={[{name: "Grapefruit", checked: false},
      {name:"Lime", checked:false},
      {name:"Strawberry", checked:false},
      {name:"Lemon", checked:false},
      {name:"Chocolate", checked:false},
      {name:"Coffee", checked:false},
      {name:"Apple", checked:false},
      {name:"Peach", checked:false},
      {name:"Rose", checked:false},
      {name:"Ginger", checked:false},
      {name:"Elderflower", checked:false},
      {name:"Cranberry", checked:false},
      {name:"Tomato", checked:false},
      {name:"Raspberry", checked:false},
      {name:"Almond", checked:false},
      {name:"Orange", checked:false},
      {name:"Pineapple", checked:false},
      {name:"Oaky", checked:false},
      {name:"Mint", checked:false},
      {name:"Banana", checked:false},
      {name:"Cherry", checked:false},
      {name:"Apricot", checked:false},
      {name:"Passion Fruit", checked:false},
      {name:"Tobasco", checked:false}
    ]}
      handleClick={handleChange}
      id={3}/>
    </form>
  )
}
