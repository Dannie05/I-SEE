import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import Sidebar from '../components/Sidebar'
export const lorem = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente architecto quidem eveniet nam optio, sunt doloremque perspiciatis modi magni assumenda debitis tenetur voluptate commodi! Debitis dolore adipisci modi laborum.';
const contactParagraph = 'Do not hesitate to get in touch with us! Our team is ready to assist you with any questions or concerns you may have. Fill out our contact form to get started'
import FooterLinks from '../components/footer';
import BillsType from '../components/cards/billOptions';
import Navbar from '../components/navbar';
import FAQ from '../components/FAQ';
// import { signIn } from 'next-auth/react'
import "bootstrap/dist/css/bootstrap.min.css"
// import Link from 'next/link';
import Image from 'next/image'
// import { inputFields } from '../components/contactForm/contact';
import { useEffect } from 'react';
import Packages from '../components/packagePlans';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Router from 'next/router';
// import { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
import ContactOptions from '../components/cards/contactOptions';
// import Contact from '../components/contactForm';
// import profile from '../public/assets/Avatar.png';
import Hero from '../components/hero';
// import { useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ContactFormModal from '../components/cards/modal';
import Upgrade from '../components/Upgrade'
import Contact from '../components/contactForm/index';

export const landingPageLink = [
  { item: 'contact', id: 1, href: '#contact' },
  { item: 'About', id: 2, href: '/login' }
]

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