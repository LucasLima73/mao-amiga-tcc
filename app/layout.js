'use client'
import { Provider } from 'react-redux'
import './globals.scss'
import store from '../shared/redux/store'

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
export default RootLayout
