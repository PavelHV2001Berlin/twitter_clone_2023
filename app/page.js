import React from 'react'

const LoginScreen = () => {
  return (
    <div className='login_container'>
         <svg fill='#333' xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
         <form className='login_form'>
            <h2>Konto Erstellen</h2>
            <input type='text' placeholder='Enter your display name'/>
            <input type='text' placeholder='Enter your username (@)' />
            <input type='email' placeholder='Enter your email'/>
            <input type='password' placeholder='Enter your password'/>
            <input type='submit'/>
        </form>
    </div>
     
  )
}

export default LoginScreen