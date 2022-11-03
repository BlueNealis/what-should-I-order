import styles from './promptBox.module.scss'


export const PromptBox = ({prompt, options, handleClick, id}) => {
  console.log(prompt)
  return(
    <div>
      <h1>{prompt}</h1>
      {options.map((option) => {
        return (<label key={Date.now()}>
        <input
        name={option.name}
        type={"checkbox"}
        checked={option.checked}
        onChange={(e) => handleClick(e)}
        />{option.name}
        </label>)
      })}
    </div>
  )
}
