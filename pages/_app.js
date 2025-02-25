import "@/styles/globals.css";
import "@/../bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free"
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  useEffect(()=>{
    import('@/../bootstrap/dist/js/bootstrap.bundle');
   },[])

  return <Component {...pageProps} />;
}
