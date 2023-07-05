import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Router from "next/router";

export default function Hero() {
  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }} mt={-10}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            ></Text>
            <br />
            <span className="dark:text-white text-primary-color uppercase text-2xl">
              {"  Welcome to I-see"}
            </span>
            {/* <Text color={'blue.400'} as={'span'}>
                Make more profit by automating bill and utulity payments
              </Text>{''} */}
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} color={'gray.500'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis exercitationem assumenda facere. Est nobis tenetur, nesciunt possimus odit provident laudantium?
            </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"linear"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              className="bg-primary-color"
              onClick={() => {
                Router.push("/login");
              }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      {/* <Flex flex={1}>
          <Image
            alt={'hero Image'}
            objectFit={'cover'}
            src={
              '/images/pexels-ylanite-koppens-934070.jpg'
            }
          />
        </Flex> */}
    </Stack>
  );
}
