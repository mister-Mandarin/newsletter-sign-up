import {ReactComponent as IconSuccess} from './images/icon-success.svg';
import UiTag from '../../helpers/uiTag/uiTag';
import styles from './success.module.css'
import UiButton from '../../helpers/uiButton/uiButton';

export default function Success() {
  return (
    <div className={styles.container}>
      <IconSuccess/>
      <UiTag tag={'Thanks for subscribing!'}/>
      <p>A conformation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside
        to
        confirm your subscription.</p>
      <UiButton buttonText={'Dismiss message'}/>
    </div>
  );
}