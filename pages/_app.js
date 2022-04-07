import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store';
import Alert from '../components/notifications/alert';
import MainLayout from '../admin-panel/layouts/main';
import DefaultLayout from '../admin-panel/layouts/default';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/globals.css'
import "../styles/Nav-mobile.css"
import "../styles/alert.css";
import "../styles/loading.css"

const  MyApp = ({Component, pageProps }) => {

  const Layout = Component.Layout || DefaultLayout;

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oswald:wght@200;300;400;500;600;700&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>  
        </Head>
      <Provider store = {store} >
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Layout>
              <Alert/>
              <Component {...pageProps} />
            </Layout>
          </MainLayout>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp