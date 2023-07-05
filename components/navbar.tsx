import { useDisclosure, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Router from 'next/router';
import "bootstrap/dist/css/bootstrap.min.css"
import { signIn } from 'next-auth/react';
const Links = [
    { title: 'Contact Us', route: '/' },
    { title: 'FAQs', route: '/' },
];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <nav className={`bg-${useColorModeValue('gray-100', 'gray-900')} px-8 w-screen md:w-[98.7vw] -mt-3.5 top-0 ease-in-out duration-700  before:absolute inset-0 dark:bg-black dark:text-silver`} >
            <nav className='flex items-center justify-between h-16'>
                <div>
                    <Link href={'/'}>
                        <Image src='/images/logo.png' alt='logo' height={80} className='rounded-md' width={80} />
                    </Link>
                </div>

                <div>
                    <button className='btn btn-md dark:text-white bg-transparent d-md-none' aria-label={'Open Menu'} onClick={isOpen ? onClose : onOpen}>{isOpen ? <AiOutlineClose /> : <GiHamburgerMenu size={35}/>}</button>
                    <div className='flex items-center space-x-8'>
                        <nav className='gap-2 d-none d-md-flex hover:color-purple-200'>
                            {Links.map((link) => (<Link key={link.title} href={link.route}>{link.title}</Link>))}
                        </nav>
                        <nav className='d-none d-lg-flex gap-9 max-[800px]:bg-purple'>
                            <button className='btn btn-sm border uppercase rounded-md hover:translate-y-[-2px] background text-white btn active:opacity-0 ease-in-out my-1.5 -mx-6' onClick={() => { Router.push('/signUp') }}>Create Account</button>
                            <button className='uppercase btn btn-sm border rounded-md hover:translate-y-[-2px] background cursor-pointer text-white my-1.5 px-6 active:opacity-0 -mr-6' onClick={() => signIn()}>Sign In</button>
                        </nav>

                    </div>

                </div>

            </nav>
            {isOpen ? (<nav className='pb-4 d-md-none' >
                <nav className='flex flex-col space-y-4 ml-5'>
                    {Links.map((link) => (<Link key={link.title} href={link.route}>{link.title}</Link>))}
                    <button className='p-2 border uppercase rounded-md background text-white btn active:opacity-0.5 ease-in-out' onClick={() => { Router.push('/login') }}>Get started</button>
                    <button className='uppercase btn btn-block text-white background md:bottom-28 md:left-[47%] -bottom-10 mt-2 right-16 sticky' onClick={() => signIn()}>Sign In</button>
                </nav>
            </nav>) : null}
        </nav>
    );
}