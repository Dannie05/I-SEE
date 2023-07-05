import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, } from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden" className='bg-secondary-color'>
            <Flex>
                <Box
                    bg="#fff"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }} className='max-[350px]:overflow-x-hidden'>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                <Heading className='text-black'>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        We&#39;d Love to Hear from You😊
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                            className="linear"
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                                +234-988888888
                                            </Button>
                                            <Button
                                            className="linear"
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                user@example.com
                                            </Button>
                                            <Button
                                            className="linear"
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                Enugu, Nigeria
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            color='#333'
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#870E3A', color: '#fff' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            color='#333'
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#870E3A', color: '#fff' }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            color='#333'
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#870E3A', color: '#fff' }}
                                            icon={<BsDiscord size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    {/* <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    /> */}
                                                    <Input type="text" size="md" isRequired/>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>E-mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    {/* <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    /> */}
                                                    <Input type="email" size="md" isRequired/>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="message" isRequired
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    variant="solid"
                                                    bg="#870E3A"
                                                    color="white"
                                                    _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}

//   levels

