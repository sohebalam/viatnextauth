import "../styles/globals.css"
import Head from "next/head"
import { Provider } from "next-auth/client"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//like

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head></Head>

      <div className="container">
        <Component {...pageProps} />
      </div>

      <ToastContainer />
    </Provider>
  )
}

export default MyApp
