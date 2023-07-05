'use client'
export const company = "I-SEE";
import "bootstrap/dist/css/bootstrap.min.css"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const questions = [
  {
    id: "Q1",
    Question: `what is ${company}`,
    Answer: `${company} is a platform that allows users to pay their utility bills online`,
  },

  {
    id: "Q2",
    Question: `what type of utility bills can I pay on ${company}`,
    Answer: `${company} is a platform that allows users to pay their utility bills online`,

  },

  {
    id: "Q3",
    Question: `How do I pay my utility bill on ${company}`,
    Answer: `${company} is a platform that allows users to pay their utility bills online`,
  },

  {
    id: "Q4",
    Question: `Can I set up automatic payment on ${company}`,
    Answer: `${company} is a platform that allows users to pay their utility bills online`,
  }
];
export default function FAQ() {
  return (
    <>
    <h1 className="font-medium text-xl text-center">Frequently Asked Questions</h1>
      <Accordion allowToggle mx={{md:6 ,base:0, sm:4}} letterSpacing={'1'}>
        <>
          {questions.map(({Question, Answer, id}) => (
            <AccordionItem key={id} rounded={'sm'} mb={1}>
              <h2 className="bg-secondary-color max-sm:px-1 sm:px-4 text-white">
                <AccordionButton fontSize={'x-large'}>
                  <Box as="span" flex='1' textAlign='left' color={'white'}>
                     <span className="mr-2 ">{id}.</span>
                    {Question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg={'#fff'} color={'#333'} textAlign="left">
               {Answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </>
      </Accordion>
    </>
  );
}
