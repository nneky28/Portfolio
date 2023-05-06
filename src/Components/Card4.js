import React from 'react'
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel,  
  } from "@chakra-ui/react";
  import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { Fade } from 'react-reveal';

export default function EducationCard({title,description}) {
  return (
    <Fade bottom duration={2000}>
    <AccordionItem my={"10px"}>
    {({ isExpanded }) => (
        <div>
            <h2>
              <AccordionButton bg={'#eee'} _expanded={{ bg: 'red.red400', color: 'gray' }} border={'none'}>
                <Box flex='1' textAlign='left' textTransform={"uppercase"} color={'gray'}>
                 {title}
                </Box>
                {isExpanded ? ( <AiOutlineMinus fontSize='12px' />):(
                    <AiOutlinePlus fontSize='12px' />
                )}
              
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={'gray'}>
             {description}
            </AccordionPanel>
            </div>
    )}
          </AccordionItem>
    </Fade>
   

  )
}
