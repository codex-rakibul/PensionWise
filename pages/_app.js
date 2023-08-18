import '@/styles/globals.css'
import LayoutComponet from '@/utility/layout'

export default function App({ Component, pageProps }) {
  
  if (Component.getLayout) {
    return (
      <>
        {Component.getLayout(<Component {...pageProps} />)}
      </>
    );
  }
  return <LayoutComponet>
    <Component {...pageProps} />
  </LayoutComponet> 
}
