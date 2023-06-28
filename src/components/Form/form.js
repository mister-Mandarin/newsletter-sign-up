import styles from './form.module.css'
import UiTag from '../../helpers/uiTag/uiTag';
import UiButton from '../../helpers/uiButton/uiButton';
import {ReactComponent as IconPs} from './images/illustration-sign-up-desktop.svg';
import cn from 'classnames'
import {useState} from 'react';

export default function Form({success}) {

  const [errorValidate, setErrorValidate] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
    setErrorValidate(false)
  }

  const validation = (e) => {
    e.preventDefault();
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    if (validateEmailRegex.test(inputValue) && inputValue !== '') {
      success(inputValue)
    } else {
      setErrorValidate(true)
    }
  }

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
        <form onSubmit={validation} className={styles.form}>
          <label>
            <span>Email address</span>
            {errorValidate && <span className={styles.error}>Valid email required</span>}
            <input onChange={handleChange} value={inputValue}
              className={cn(styles.input, {
                [styles.inputError]: errorValidate
              })}
              type="text"
              placeholder="email@example.ru"/>
          </label>
          <UiButton buttonText={'Subscribe to monthly newsletter'}/>
        </form>
      </div>

      <div className={styles.img}
        style={{backgroundImage: `url(${IconPs})`}}
      >
      </div>
    </div>
  );
}