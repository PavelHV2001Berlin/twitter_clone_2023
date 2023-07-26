import React from 'react'
import '@styles/globals.css';
import NavigationBar from '@components/NavigationBar';
import Trends from '@components/Trends';
export const metadata = {
    title: "Twitter-Clone",
    description: 'Discover & Share AI Prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>

          <div className='grid-layout'>
            <NavigationBar/>
              <main className='container'>
                  {children}
              </main>
              <aside className='container'>
                <Trends/>
              </aside>
          </div>
            
        </body>

    </html>
  )
}

export default RootLayout;