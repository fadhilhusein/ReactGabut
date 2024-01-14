import React, { useState } from 'react'
import styles from './index.module.css'



function Card() {
  const [count, setCount] = useState(0)

  function addHandler() {
    setCount(count + 1)
  }
  
  function removeHandler() {
    if (count === 0) alert('Angka tidak boleh negatif!');
    else setCount(count - 1);
  }
  
  return (
    <div className={styles.card}>
      <h1>{count}</h1>
      <div className={styles.card__actions}>
        <button onClick={() => addHandler()}>+</button>
        <button onClick={() => removeHandler()}>-</button>
      </div>
    </div>
  )
}

export default Card