import Image from "next/image";
import { Inter } from "next/font/google";
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import HeroSection from "@/components/Section_2";
import Specialities from "@/components/Section";
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (

    <>
     <HeroSection/>
     </>
  );
}
