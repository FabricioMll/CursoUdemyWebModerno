import '../styles/globals.css'
import '../styles/app.css'
// É neste arquivo que toda a página vai ser composta
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
