import styles from './promptBox.module.scss'


export const PromptBox = ({prompt, options, handleClick, id}) => {
  return(
    <div className={styles.promptBox} key={id}>
      <h1>{prompt}</h1>
        <div className={styles.optionSection}>
      {options.map((option) => {
        return (<label key={`${option.name}-label`}>
        <input
        key={option.name}
        name={option.name}
        type={"checkbox"}
        checked={option.checked}
        onChange={(e) => handleClick(e)}
        />{option.name}
        </label>)
      })}
        </div>
    </div>
  )
}
