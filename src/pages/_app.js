import { ToastContainer } from "react-toastify"
import "../styles/global.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
