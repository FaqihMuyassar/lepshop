import "../styles/global.css"
import { CartProvider } from '../assets/components/cartContext.jsx';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
