// import React from 'react';
// import styles from '../Login/Login.module.scss'

// const Login = () => {
//     return (
//         <>
//            <div className={styles.Login__box}>
//             <h1 className={styles.Login__box__title}>Login</h1>
//             <input type="text" placeholder='email' className={styles.Login__box__input} />
//             <input type="text" placeholder='password' className={styles.Login__box__input} />
//             <button className={styles.Login__box__btn} >Login</button>
//             </div> 
//         </>
//     );
// }

// export default Login;

import React from 'react'
import { useState } from "react";
import styles from '../Login/Login.module.scss'

function Login() {
    
    const [email, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handlerToken = async () => {

        const user = {
            email: email,
            password: pass
        }
console.log(user)
        let res = await fetch('https://reqres.in/api/login',
            {
                method: 'post',
                headers: { 'content-type ': 'application/json' },
                body: JSON.stringify(user)
            })

        res = await res.json()
console.log(res)
        window.localStorage.setItem('token',res.token)
    }

    return (
        <>
            
                <div className={styles.Login__box}>
                    <h1 className={styles.Login__box__title}>Login</h1>
                    <input onChange={(e) => setUser(e.target.value)} className ={styles.Login__box__input} type="text" placeholder='email' />
                    <input onChange={(e) => setPass(e.target.value)} className ={styles.Login__box__input} type="text" placeholder='password' />
                    <button onClick={handlerToken} className={styles.Login__box__btn} >Login</button>
                </div>
            
        </>
    )
}

export default Login