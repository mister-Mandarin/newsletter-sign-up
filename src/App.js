import './App.module.css';
import {Form, Success} from './components/index';
import styles from './App.module.css'
import {useState} from 'react';

function App() {

  const [formSubmit, setFormSubmit] = useState('null');

  const success = (data) => {
    setFormSubmit(data)
  }

  return (
    <div className={styles.wrapper}>
      {formSubmit === null ? <Form success={success}/> : <Success formSubmit={formSubmit}/>}
    </div>
  );
}

export default App;
