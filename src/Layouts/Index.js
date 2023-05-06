import React from 'react'
import NavBar from './NavBar'
import {
  Box,
  Container,
  HStack,
 
} from "@chakra-ui/react";

export default function MainLayout({children, bgColor = "white"}) {
  return (
    <Container maxW={"container.xl"} >
    <HStack align={"flex-start"} pos={"relative"}>
    <Box display={{base: "none", md: "block"}}>
    <NavBar/>
    </Box>
  

    <Box pl={{base: "0", md:"320px"}} w={"100%"} bg={'white'}> 
   
    {children}
    </Box>
       
   
</HStack>
    </Container>
  
  )
}
