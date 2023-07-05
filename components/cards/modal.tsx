import React, { useState } from 'react'
import { Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalFooter, useDisclosure, Button, ModalCloseButton, Box, Text, Stack, VStack, Input, Heading, useColorModeValue, Flex } from "@chakra-ui/react"
import { withdrawalSuccessInformation, HandleWithdrawalSuccessInformation } from '../dashboardItems'
import { useToast } from '@chakra-ui/react'

export default function ContactFormModal(
  {
    openModal
  }: {
    openModal?: string | null
  }
) {
  const [WithdrawalPasswordValue, setWithdrawalPasswordValue] = useState(" ")
  const handleAuthenticateWithdrawalPassword = ev => {
    setWithdrawalPasswordValue(ev.target.value)

  }
  const toast = useToast();
  const [withdraw, setWithdraw] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [withdrawalSuccess, setWithdrawalSuccess] = useState(true);
  return (
    <>
      <Button onClick={
        () => {
          onOpen();
          setWithdraw(true);
        }
      } color='white' bg={'#870E3A'} className="hover:text-black">Proceed</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='md:min-w-[85vw]' >
          {/* <ModalHeader textTransform={'uppercase'} textAlign="center">Get in touch with us</ModalHeader> */}
          <ModalCloseButton bg={'red'} />
          <ModalBody p={-12}>
            {openModal ? (
              <Box>
                {withdraw ?
                  <Flex
                    // minH={'100vh'}
                    // minW={'80vw'}
                    align={'center'}
                    className=""
                    justify={'center'}
                  >
                    <Stack
                      spacing={5}
                      w={'full'}
                      maxW={'md'}
                      rounded={'xl'}
                      boxShadow={'lg'}
                      p={7}
                      my={12}>
                      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} className='text-black'>
                        Confirm Withdrawal
                      </Heading>
                      <Text
                        fontSize={{ base: 'sm', sm: 'md' }}>
                        Enter Transaction password to continue
                      </Text>
                      <form className='justify-between'>
                        <Input
                          _placeholder={{ color: 'gray.500' }}
                          type="password"
                          fontSize={'lg'}
                          mb='3'
                          color={'#000'}
                          fontWeight='medium'
                          isRequired
                          id="txnPassword"
                          onChange={handleAuthenticateWithdrawalPassword}
                          //   onInput={checkEmail}
                          name="txnPassword"
                        />


                      </form>

                    </Stack>
                  </Flex> :
                  <VStack>
                    <h1 className={`${withdrawalSuccess ? "text-[green] text-xl" : "text-[red] text-xl"} uppercase font-bold mt-3`} style={{ letterSpacing: 0.8 }}>{withdrawalSuccess ? "Success" : "Failed"}</h1>
                    {withdrawalSuccess ?
                      <div className='items-center text-center w-1/2 max-sm:min-w-full max-sm:px-3'>
                        <p>Transaction ID:73A7DBDH8</p>
                        <p>Session ID:73A7DBDH8</p>
                        <p className='text-lg text-center'>The transfer has been successfully deposited to the recipient account. Do note that the actual credited time is subject to the bank</p>
                        {withdrawalSuccessInformation.map(({ item, info }) => (
                          <HandleWithdrawalSuccessInformation key={item} item={item} info={info} />
                        ))}</div>
                      :
                      <>
                        <p>An unexpected error occurred. Please try again later</p>
                      </>
                    }

                  </VStack>
                }
              </Box>
            ) : (
              <Text textAlign={"center"} p={4}>Please fill in the empty Field</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} bg={'red.500'} className="closeBtn">
              Close
            </Button>
            <button className='hideSubmitBtn background p-2 text-white rounded-md m-1' onClick={() => {
              const txnPasswordInputElement = document.querySelector("#txnPassword");
              const hideSubmitBtn = document.querySelector(".hideSubmitBtn");
      
              if (WithdrawalPasswordValue.length<=6) {
                toast({
                  title: "please enter withdrawal password",
                  // description: ,
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                });                // txnPasswordInputElement.value=""

              } else {
                toast({
                  title: "Password confirmed✅",
                  description: "Processing withdrawal...please wait",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                })
                // this is where u will authenticate the user transaction password sir
                // if it is successful
                setTimeout(() => {
                  setWithdraw(!withdraw)
                  hideSubmitBtn.classList.add("hidden");
                }, 3000);
                const closeBtn = document.querySelector(".closeBtn");
                closeBtn.addEventListener("click", () => {
                  setWithdraw(true);

                })
                // else an error message
                // the items there are just a demo. u will have to set it to the value of the elements the user adds
              }
            }}>Submit</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

