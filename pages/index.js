import Image from "next/image";
import { Inter } from "next/font/google";
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import HeroSection from "@/components/Section_2";
import Projects from "@/components/Projccts";
import Skills from "@/components/Skills";
import AboutMe from "@/components/About";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (

    <>

     <HeroSection/>
     <div id='projects'>
           <Projects></Projects>

     </div>
     
     <Skills></Skills>
<AboutMe></AboutMe>
     </>

  );
}
