import React from 'react'
import {
  Avatar,
  Box,
  Center,
  HStack,
  LinkBox,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import LinkMenu from '../Components/LinkMenu';
import { FaLinkedinIn,FaGithub,FaTwitter} from "react-icons/fa";

export default function NavBar() {

  const today = new Date()
  return (
    <>
    <Box bgColor={"#eee"}  p="14px" w="300px" textAlign={"center"} overflowY={"scroll"} pos={"fixed"}  fontFamily={"body"} h={"100vh"}>
    <Center mt={"32px"}>
      <Wrap>
      <WrapItem>
        <Avatar size='2xl' name='nneky' src='avater.jpeg' bgColor="white" />{' '}
      </WrapItem>
    </Wrap>
    </Center>
      <Text mt={"28px"} fontSize={"20px"}  fontFamily={"heading"} color={'gray'}>
          Ezema Nneka
      </Text>
      <Text mt={"3px"} fontSize={"15px"}  fontFamily={"body"} color={'gray'}>
         Software Engineer
      </Text>

      <Stack mt={"32px"} spacing={"15px"}>
          <LinkMenu link="#Home" title= "Home"/>
          <LinkMenu link="#About" title= "About"/>
          <LinkMenu link="#Services" title= "Services"/>
          <LinkMenu link="#Skills" title= "Skills"/>
          <LinkMenu link="#Education" title= "Education"/>
          <LinkMenu link="#Experience" title= "Experience"/>
          <LinkMenu link="#Work" title= "Work"/>
          <LinkMenu link="#Contact" title= "Contact"/>
          
      </Stack>

      <Text fontSize={"12px"} color={'gray'} mt={"32px"}>© Copyright ©{today.getFullYear()} All rights reserved |</Text>

      <Text fontSize={"12px"} color={'gray'} mt={"12px"}>This Portfolio is made with <i className="fa-solid fa-heart" /> by <Box as={"span"} color={"red.red500"}>Nnekky</Box> </Text>

    <Center mt={"12px"} pb={"62px"} color={'gray'}>
     <HStack spacing={"12px"} cursor={"pointer"}>
     <LinkBox as={"a"} href=" https://www.linkedin.com/in/ez ema-nneka-70ba86201/" target={"blank"}> <FaLinkedinIn/></LinkBox>
     <LinkBox as={"a"} href="https://github.com/nneky28" target={"blank"}> <FaGithub/></LinkBox>
     <LinkBox as={"a"} href="https://twitter.com/techiesis" target={"blank"}><FaTwitter/></LinkBox>
     
     
      
      </HStack> 

    </Center>
     

    </Box>

    
    </>
    
  )
}
