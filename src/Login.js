import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    };


    return (
        <div className="login">
            <Link to='/'>
            <img 
            className="login__logo"
            src='https://www.wtvq.com/wp-content/uploads/2020/02/Amazon.jpg'
            />
            </Link>
            <div className="login__container">
                <h1> SIGN IN</h1>
                <form>
                    <h5>E-MAIL</h5>
                    <input type='text' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>PASSWORD</h5>
                    <input type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button
                    onClick={signIn}
                    className='login__signInButton'
                    type='submit'
                    >SIGN IN</button>
                </form>
                <p>
                By using Amazon Services,
                 you agree to these conditions.
                  Please read them carefully.
                We offer a wide range of Amazon Services,
              and sometimes additional terms may apply.
             When you use an Amazon Service (for example,
               Your Profile, Gift Cards, Amazon Video,
    Your Media Library, Amazon devices,
     or Amazon applications) you also will be subject to the guidelines,
      terms and agreements applicable to that Amazon Service ("Service Terms").
       If these Conditions of Use are inconsistent with the Service Terms,
        those Service Terms will control.
                </p>
                <button
                onClick={register}
                className='login__registerButton'
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
