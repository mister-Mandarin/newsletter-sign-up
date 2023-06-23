import styles from './form.module.css'
import UiTag from '../../helpers/uiTag/uiTag';
import UiButton from '../../helpers/uiButton/uiButton';
import {ReactComponent as IconPs} from './images/illustration-sign-up-desktop.svg'

export default function Form() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <UiTag tag={'Stay updated!'}/>
        <p>Join 600,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <input type="email" name="" id=""/>
        <UiButton buttonText={'Subscribe to monthly newsletter'}/>
      </div>

      <div className={styles.img}
        style={{backgroundImage: `url(${IconPs})`}}
      >
      </div>
    </div>
  );
}