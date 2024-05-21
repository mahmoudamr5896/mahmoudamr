import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
// import "@/../bootstrap/dist/css/bootstrap.min.css /home/mahmoud/Desktop/Next project/my-app/node_modules/bootstrap/dist/js/bootstrap.min.js";
// const dooo = import('@/../bootstrap/dist/js/bootstrap.min.js');
export default function Document() {
 

  return (
    <Html lang="en">
      
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
      <Head />

      <body>
        <Navbar></Navbar>
        <Main />
        <NextScript />
        <Footer></Footer>
      </body>
    </Html>
  );
}
