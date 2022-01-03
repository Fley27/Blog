import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../redux/store';
import Alert from '../components/notifications/alert';
import MainLayout from '../admin-panel/layouts/main';
import DefaultLayout from '../admin-panel/layouts/default';
import '../styles/globals.css'
import "../styles/Nav-mobile.css"
import "../styles/alert.css";
import "../styles/loading.css"

const  MyApp = ({Component, pageProps }) => {

  const Layout = Component.Layout || DefaultLayout;

  return (
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
  )
}

export default MyApp