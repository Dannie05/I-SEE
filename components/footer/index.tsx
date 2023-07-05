import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  import Image from 'next/image';
import { year } from '../../utilities/date';
  
  const Logo = (props: any) => {
    return (
    <Image src='/assets/recharge-footer.png' alt='logo' height={120} className='' width={120}/>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function FooterLinks() {
    return (
      <Box
        bg={useColorModeValue('none', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'4xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} wrap={"wrap"} spacing={{base:0.5, sm:4}} gap={2} className='bg-[silver] p-2 '>
            {/* <Link href={'#'}>Home</Link> */}
            {/* <Link href={'#'} bgColor='InfoBackground'>How it works</Link> */}
            <Link href={'/Upgrade'} bgColor='InfoBackground'>Packages</Link>
            {/* <Link href={'#'} bgColor='InfoBackground'>News</Link> */}
            {/* <Link href={'#'} bgColor='InfoBackground'>About</Link> */}
            {/* <Link href={'#'} bgColor='InfoBackground'>Blog</Link> */}
            <Link href={'/contactForm'} bgColor='InfoBackground'>Contact us</Link>
            <Link href={'/faq'} bgColor='InfoBackground'>FAQs</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }} textColor={'silver'}>
            <Text>© {year} recharge profit. All rights reserved</Text>
            <Stack direction={'row'} spacing={6} fontSize={10} >
              <SocialButton label={'Twitter'} href={'#'} >
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }