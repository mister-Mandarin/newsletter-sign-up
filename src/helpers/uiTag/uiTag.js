import styles from './uiTag.module.css'

export default function UiTag({tag}) {
  return (
    <h1 className={styles.tag}>{tag}</h1>
  );
}