import styles from './form.module.scss'
import { useState } from 'react'
import { PromptBox } from '../../components/promptBox/promptBox'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


export default function form() {
  const handleChange = (e) => {
    console.log("hi",e)
  }

  return(
    <form>
      <h1>Let's get some preferences</h1>
      <PromptBox prompt={"does this work?"} options={[{name: "yes", checked: true},{name:"no", checked:false}]} handleClick={handleChange} key={1}/>
    </form>
  )
}
