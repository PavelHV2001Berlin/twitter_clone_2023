import React from 'react'
import '@styles/globals.css';
import NavigationBar from '@components/NavigationBar';
import Trends from '@components/Trends';
export const metadata = {
    title: "Login",
    description: 'Discover & Share AI Prompts'
}
const LoginLayout = ({children}) => {
  return (
    <html lang='en'>
      <head>
      <link rel="icon" href="assets/icons/logo.svg" type="image/svg+xml"/>

      </head>
        <body>
            <div className='login_background_overlay'>
                {children}

            </div>
            
        </body>

    </html>
  )
}

export default LoginLayout;