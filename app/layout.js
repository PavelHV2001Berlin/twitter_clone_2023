import React from 'react'

export const metadata = {
    title: "Twitter-Clone",
    description: 'Discover & Share AI Prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <nav>Hier fehlt eine navigation</nav>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;