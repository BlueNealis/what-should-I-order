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
      options={[{name: "I don't ew", checked: false},{name:"A little", checked:false}, {name:"A lot", checked:false}, {name:"I don't want booze", checked:false}]}
      handleClick={handleChange}
      key={1}/>
    </form>
  )
}
