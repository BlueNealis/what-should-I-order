import styles from './promptBox.module.scss'


export const PromptBox = ({prompt, options, handleClick, id}) => {
  const optionKeys = Object.keys(options)
  return(
    <div className={styles.promptBox} key={id}>
      <h1>{prompt}</h1>
        <div className={styles.optionSection}>
      {optionKeys.map((option) => {
        return (<label key={`${option}-label`}>
        <input
        key={option}
        name={option}
        type={"checkbox"}
        checked={options[option]}
        onChange={(e) => handleClick(e)}
        />{option}
        </label>)
      })}
        </div>
    </div>
  )
}
