import React from 'react'
import {
    Box,
    Text,
 
  } from "@chakra-ui/react";
  
import { Flip } from 'react-reveal';


export default function AboutCard({color,title, icon}) {

  return (
  
   <Flip left duration={3000}>
   <Box  borderBottom={`3px solid ${color}`} bg={'#eee'}
    boxShadow={"3px 3px 25px 2px #C0C0C1"} p="25px" textAlign={"start"} pb={"42px"}>
   <Box fontSize={"30px"} color={`${color}`}> {icon} </Box>
   <Text fontSize={"16px"} pt={"35px"} color={'gray'}>{title}</Text>
   </Box>
   </Flip>
  
 
   
  )
}
