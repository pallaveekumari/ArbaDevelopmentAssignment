import React from 'react'
import styles from "../Styles/Signup.module.css"
const Signup = () => {
  return (
    <  div>
  <h1>Signup</h1>
    <div className={styles.loginMainBox}>
 
 <div className={styles.loginImageBox}></div>
 <div  className={styles.loginFormBox}>

<div className={styles.loginCircle}></div>
<h2>ARBA DEVELOPMENT STUDIOS</h2>
<p>This is arba devlopment website</p>
<input className={styles.user} type="text" placeholder='Username'/>
<input className={styles.user} type="text" placeholder='Fullname'/>
<input className={styles.user} type="text" placeholder='Email'/>
<input className={styles.user} type="text" placeholder='Password'/>
<input className={styles.user} type="text" placeholder='Confirm password'/>
<button className={styles.loginbutton} >Login</button>
<p>Already have an account? <span style={{color:"blue"}}>Login</span></p>
 </div>

    </div>
    </div>
  )
}

export default Signup