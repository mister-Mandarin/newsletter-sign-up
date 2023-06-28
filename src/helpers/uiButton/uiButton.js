import styles from './uiButton.module.css'

export default function UiButton({buttonText}) {
  return (
    <button className={styles.button}>{buttonText}</button>
  );
} 