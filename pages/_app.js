
import "./../styles/globals.css"
import styles from "./../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './../src/components/Layout/index';
export default function MyApp({ Component, pageProps }) {
    return (
    <Layout>
<Component {...pageProps} />
    </Layout>
    )
  }