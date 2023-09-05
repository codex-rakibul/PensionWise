import store from '@/app/store/store';
import '@/styles/globals.css'
import LayoutComponet from '@/utility/layout'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  
  if (Component.getLayout) {
    return (
      <>
        {Component.getLayout(<Component {...pageProps} />)}
      </>
    );
  }
  return <Provider store={store}>
    <LayoutComponet>
      <Component {...pageProps} />
    </LayoutComponet> 
  </Provider>
}
