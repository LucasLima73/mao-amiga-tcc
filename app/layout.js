
"use client"
import { Provider } from "react-redux";
import "./globals.scss";
import store from "../shared/redux/store";


const RootLayout = ({children}) =>{
    return(
      <>
      <Provider store={store}>
          {children}
      </Provider>
      </>
    )
  }
  export default RootLayout
