import Header from '../components/Header'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
