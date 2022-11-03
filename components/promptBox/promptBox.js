import styles from './promptBox.module.scss'


export const PromptBox = ({prompt, options, handleClick}) => {
  console.log(prompt)
  return(
    <div>
      <h1>{prompt}</h1>
      {options.map((option) => {
        return (<label>
        <input
        name={option.name}
        type={"checkbox"}
        checked={option.checked}
        onChange={(e) => handleClick()}
        />{option.name}
        </label>)
      })}
    </div>
  )
}
