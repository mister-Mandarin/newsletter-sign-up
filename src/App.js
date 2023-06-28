import './App.module.css';
import {Form, Success} from './components/index';
import styles from './App.module.css'
import {useState} from 'react';

function App() {

  const [formSubmit, setFormSubmit] = useState(null);

  const success = (data) => {
    setFormSubmit(data)
  }

  return (
    <>
      <div className={styles.wrapper}>
        {formSubmit === null ? <Form success={success}/> : <Success formSubmit={formSubmit}/>}
        <div className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend
          Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}

export default App;
