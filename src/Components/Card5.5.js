import React from 'react'
import {
  
    Box,
    Center,
    HStack,
    Stack,

  } from "@chakra-ui/react";

export default function EmpCard({title,description, color, icon, date}) {
  return (
    <HStack mt={{base: "20px", md: "-5px"}}>
    <Box w="10%" display={{base: "none", md: "block"}} cursor="pointer">
      <Stack >
        <Box _hover={{bgColor: "green"}} transition="0.5s" bg={`${color}`}
        border={"4px solid #f2f3f7"} borderRadius="100%" width={"50px"} h={"50px"}>
          <Center color="white" pt="10px" fontSize={"20"}>{icon}</Center></Box>
      
      </Stack>
    </Box>
   
  </HStack>
  )
}
