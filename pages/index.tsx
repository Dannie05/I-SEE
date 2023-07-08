import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Navbar from '../components/navbar';
// import Sidebar from '../components/Sidebar'
export const lorem = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente architecto quidem eveniet nam optio, sunt doloremque perspiciatis modi magni assumenda debitis tenetur voluptate commodi! Debitis dolore adipisci modi laborum.';
const contactParagraph = 'Do not hesitate to get in touch with us! Our team is ready to assist you with any questions or concerns you may have. Fill out our contact form to get started'
// import { signIn } from 'next-auth/react'
import "bootstrap/dist/css/bootstrap.min.css";
// import Link from 'next/link';
// import { inputFields } from '../components/contactForm/contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/hero';
// import { useRef } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  // const [close, setClose] = useState(false)

  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/*================================ Navbar and Hero section start============================== */}

      <Navbar />
      <Hero />
      {/*================================== Navbar and Hero section end================================== */}

      
    </Layout>
  )
}