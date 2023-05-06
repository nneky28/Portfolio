import React from 'react'
import {
    Box,
    Center,
    Text,
    
  } from "@chakra-ui/react";

import { Fade } from 'react-reveal';

export default function ServiceCard({color,title,description,icon}) {
  return (
    <Fade bottom duration={2200}>
    <Box borderBottom={`3px solid ${color}`} bgColor={"#eee"} color={'gray'}
     boxShadow={"3px 3px 25px 2px #C0C0C1"} p="25px" pb={"32px"} mb={"32px"}
      textAlign={"center"}>
        
    <Center mt={"-73px"}>
    <Box h={"80px"} w={"80px"} fontSize={"30px"} bgColor={`${color}`} 
     clipPath="polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)">
        <Center fontSize={"35px"} color={"white"} pt={"23px"}>{icon}</Center> </Box>
    </Center>
  
    
    <Text fontSize={"16px"} pt={"35px"} fontWeight={"700"}>{title}</Text>
    <Text fontSize={"15px"} pt={"30px"}>{description}</Text>
    </Box>
    </Fade>
   
  )
}
