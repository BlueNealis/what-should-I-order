import styles from './promptBox.module.scss'


export const PromptBox = ({prompt, options, handleClick, id}) => {
  const optionKeys = Object.keys(options)
  return(
    <div className={styles.promptBox} key={id} autocomplete="off">
      <h1>{prompt}</h1>
        <div className={styles.optionSection}>
      {optionKeys.map((option) => {
        return (<label key={`${option}-label`}>
        <input
        name={id}
        value={option}
        type={"checkbox"}
        checked={options[option].state}
        onChange={(e) => handleClick(e)}
        />{option}
        </label>)
      })}
        </div>
    </div>
  )
}
