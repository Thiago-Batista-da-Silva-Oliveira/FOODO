import Head from 'next/head'
import AboutComponent from '../components/AboutComponent'
import ContactComponent from '../components/ContactComponent'
import DownloadComponent from '../components/DownloadComponent'
import ServiceComponent from '../components/ServiceComponent'
import TopComponent from '../components/TopComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>FOODO - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
      </Head>

      <main>
       <TopComponent/>
       <ServiceComponent />
       <AboutComponent/>
       <DownloadComponent/>
       <ContactComponent/>
      </main>
         
      <footer >
      
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
        
      </footer>
    </>
  )
}
