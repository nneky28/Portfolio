import React, { useState } from "react";
import MainLayout from "../Layouts/Index";
import Seo from "../Utils/Seo";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Image,
  LinkBox,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  background,
  Accordion,
  Stack,
  Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react";
import { AiOutlineAlignLeft, AiOutlineBulb, AiOutlineWoman, AiOutlineDingding, AiOutlineVerified } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import LinkMenu from "../Components/LinkMenu";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillBookFill, BsFillBrushFill, BsFlower1, BsFillPatchExclamationFill, BsFillPlugFill, BsFillPencilFill } from "react-icons/bs";
import Header from "../Components/Header";
import AboutCard from "../Components/Card";
import HireCard from "../Components/Card2";
import ServiceCard from "../Components/Card3";
import ProgressBar from "../Components/ProgressBar";
import EducationCard from "../Components/Card4";
import ExperienceCard from "../Components/Card5";
import EmpCard from "../Components/Card5.5";
import WorkCard from "../Components/Card6";
import { Fade, Slide } from "react-reveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const download = () => {
    setIsLoading(true);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  // const getApi = async ()=>{
  //    const res = await new Request().get({url:"https://jsonplaceholder.typicode.com/posts"})
  //     console.log(res)
  // }

  const today = new Date()

  return (
    <MainLayout>
      <Seo title="Software Engineer" description="HomePage" />
      <Box
        mt={"32px"}
        display={{ base: "block", md: "none" }}
        fontSize={"32px"}
        position={"fixed"}
        top={"0"}
        opacity={"0.8"}
      >
        <AiOutlineAlignLeft onClick={onOpen} />

        <Drawer
          isOpen={isOpen}
          placement={placement}
          onClose={onClose}
          bgColor={background}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <Box p="14px" textAlign={"center"} fontFamily={"body"}>
                <Center mt={"32px"}>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        size="2xl"
                        name="nneky"
                        src="avater.jpeg"
                        bgColor="white" 
                      />{" "}
                    </WrapItem>
                  </Wrap>
                </Center>
                <Text mt={"28px"} fontSize={"20px"} fontFamily={"heading"}>
                 Ezema Nneka
                </Text>
                <Text mt={"3px"} fontSize={"15px"} fontFamily={"body"}>
                  Software Engineer
                </Text>

                <Stack mt={"32px"} spacing={"15px"}>
               
                <span onClick={onClose}>  <LinkMenu link="#Home" title="Home" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#About" title="About" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#Services" title="Services" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Skills" title="Skills" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Education" title="Education" /> </span>
                <span onClick={onClose}>  <LinkMenu link="#Experience" title="Experience" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Work" title="Work" /></span>
                <span onClick={onClose}>  <LinkMenu link="#Contact" title="Contact" /></span>

                
              
                </Stack>

                <Text fontSize={"12px"} mt={"32px"}>
                  © Copyright ©{today.getFullYear()} All rights reserved |
                </Text>

                <Text fontSize={"12px"} mt={"12px"}>
                  This Portfolio is made with{" "}
                  <i className="fa-solid fa-heart" /> by{" "}
                  <Box as={"span"} color={"red.red500"}>
                    nneky
                  </Box>
                </Text>

                <Center mt={"12px"} pb={"62px"}>
                  <HStack spacing={"12px"} cursor={"pointer"}>
                    <LinkBox
                      as={"a"}
                      href=" https://www.linkedin.com/in/ez ema-nneka-70ba86201/"
                      target={"blank"}
                    >

                      <FaLinkedinIn />
                    </LinkBox>
                    <LinkBox
                      as={"a"}
                      href="https://github.com/nneky28"
                      target={"blank"}
                    >

                      <FaGithub />
                    </LinkBox>
                    <LinkBox
                      as={"a"}
                      href="https://twitter.com/techiesis"
                      target={"blank"}
                    >
                      <FaTwitter />
                    </LinkBox>
                  </HStack>
                </Center>
              </Box>
            </DrawerBody>

            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Container as={"section"} maxW={"container.lg"} id={"Home"} 
      pt={"50px"} mt={{ base: "10px" }} h={{ base: "auto", md: "100vh" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"12px"}>


          <Box mt={{ base: "5px", md: "210px" }}>
            <Slide top duration={3000}>
              <Text fontFamily={"title"} fontSize={{ base: "35px", md: "53px" }}
               lineHeight={{ base: "40px", md: "65px" }} color={'gray'}>
                Welcome <br /> To My Portfolio
              </Text>
            </Slide>
            <Slide bottom duration={3000}>
              <Text mt={"22px"} color={'gray'}>
                I'm a Web developer that believes Web Sites should be of utmost
                simplicity, be responsive and user-friendly.
              </Text>

              <Button
                mt={"32px"}
                onClick={download}
                isLoading={isLoading}
                rightIcon={<FaCloudDownloadAlt />}
                color="red.red400"
                variant="outline"
              >
                Download CV
              </Button>
            </Slide>
          </Box>


          <Fade right duration={3000}>
            <Box >
              <Image w={{ base: "100%", md: "90%" }} src="about.jpeg" bg={'white'} />
            </Box>
          </Fade>

        </SimpleGrid>
      </Container>

      <Container as={"section"} maxW={"container.lg"} id={"About"} pt={"50px"} h={{ base: "auto", md: "auto" }}>
        <Header title="about us" head="who am i ?" />
        <Box>
          <Text mt={"72px"} color={'gray'}>
          I am a frontend developer with an Agile mindset. I am interested in IT and everything in it’s orbit. I am innovative, self-motivated and focused with a hunger for creativity and top-notch technological designs built on the pillars of responsive, maintainable and scalable codes. I love web development because it is closely related to sustainable development. Aspiring to contribute broad background with strong technical skills to excel as a Front End Developer.
           Proficient in Java Script, PHP, laravel, react plus modern libraries and frame works. ”
          </Text>

          <Text mt={"12px"} color={'gray'}>I want to work in an environment where I can continue to learn, grow my specialist skills and abilities, progress in terms of work experience, career growth, personal development and business ethics while utilizing my experience, knowledge, and skills to benefit any employer I am working for. Excited about the prospect of joining a product-driven company. I possess excellent analytical skills, high proficiency in Microsoft Office Suites for
           optimizing performance and I have strong written and Interpersonal communication skills.</Text>
        </Box>


        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt="38px" spacing={"32px"}>
          <AboutCard title="Software" color="#2c98f0" icon={<AiOutlineBulb />} />
          <AboutCard title="Web Design" color="#ec5453" icon={<AiOutlineWoman />} />
          <AboutCard title="Web Development" color="#f9bf3f" icon={<AiOutlineDingding />} />
          <AboutCard title="Application" color="#a84cb8" icon={<AiOutlineVerified />} />

        </SimpleGrid>

        <HireCard />


      </Container>



      <Container as={"section"} maxW={"container.lg"} id={"Services"} pt={"50px"} h={{ base: "auto", md: "auto" }} color={'gray'}>
        <Header title="WHAT I CAN DO" head="How i work" />


        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt="117px" spacing={"30px"} >

          <ServiceCard
            title="Understand"
            color="#2c98f0"
            icon={<AiOutlineBulb />}
            description="Understand the requirements, create user personas, define use cases. Having a knowledge about the user and his environment helps to provide a clear direction for the design."

          />
          <ServiceCard
            title="Research"
            color="#ec5453"
            icon={<BsFillBookFill />}
            description="Analyze competitors, research the latest trends while keeping an eye on the guidelines. This helps define the target, see similar projects and validate an idea before developing any solution."

          />
          <ServiceCard
            title="Sketch"
            color="#f9bf3f"
            icon={<BsFillBrushFill />}
            description="After gathering ideas on all aspects of job, I sketch, wireframe and design evaluate and make corrections."

          />
          <ServiceCard
            title="Design "
            color="#a84cb8"
            icon={<BsFlower1 />}
            description="Design the images and create prototypes for the job owner or user to have a view of what has been done."

          />
          <ServiceCard
            title="Iteration"
            color="#2fa499"
            icon={<BsFillPatchExclamationFill />}
            description="Do a review of the design with project owner. Sometimes projects demands adjustments and rethinking based on users criteria. I apply improvements on the project before hosting."

          />
          <ServiceCard
            title="Deployment"
            color="#4054b2"
            icon={<BsFillPlugFill />}
            description="Once the project is approved after we are ready to host, i get a domain and publish the web site."

          />

        </SimpleGrid>



      </Container>

      <Container as={"section"} maxW={"container.lg"} id={"Skills"} pt={"50px"} h={{ base: "auto", md: "auto" }} color={'gray'}>
        <Header title="MY SPECIALTY" head="MY SKILLS" />

        <Text mt={"72px"}>Over the last 3 years have been able to acquaint myself with this following skills,
          and I have used them to developer live/exiting project for client all over the world that are happy client today</Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} mt="32px" spacing={"30px"} >

          <Box>
            <Text fontWeight={"700"} fontSize={"16px"}>Soft Skills/Computer Aid Design Skills</Text>

            <Box mt={"32px"}>
              <ProgressBar title="Research" color={"red"} level={"70"} />
              <ProgressBar title="Negotiation" color={"teal"} level={"80"} />
              <ProgressBar title="Communication" color={"blue"} level={"90"} />
              <ProgressBar title="WordPress" color={"blue"} level={"90"} />
              <ProgressBar title="Corel Draw" color={"red"} level={"50"} />
              <ProgressBar title="Adobe photoshop" color={"red"} level={"50"} />

            </Box>


          </Box>
          <Box>
            <Text fontWeight={"700"} fontSize={"16px"}>Computer Programming Skills</Text>

            <Box mt={"32px"}>
              <ProgressBar title="HTML5" color={"telegram"} level={"97"} />
              <ProgressBar title="CSS3" color={"teal"} level={"87"} />
              <ProgressBar title="JavaScript" color={"teal"} level={"77"} />
              <ProgressBar title="TypeScript" color={"red"} level={"47"} />
              <ProgressBar title="React.js" color={"teal"} level={"80"} />
              <ProgressBar title="React native" color={"yellow"} level={"60"} />
            </Box>
          </Box>

        </SimpleGrid>

      </Container>


      <Container as={"section"} color={'gray'} maxW={"container.lg"} id={"Education"} pt={"50px"} h={{ base: "auto", md: "100vh" }}>
        <Header title="Education" head="Education" />

        <Accordion mt={"72px"} allowMultiple>

          <EducationCard title="Bachelor Degree of Agriculture" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat." />
          <EducationCard title="Higher school Secondary education" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat." />

        </Accordion>
      </Container>

      <Container as={"section"} maxW={"container.lg"} color={'gray'} id={"Experience"} h={{ base: "auto", md: "auto" }}>
        <Header title="Experience" head="Work Experience" />

        <Box mt={"2px"}>
        <ExperienceCard
            title="Mobile App Developer at Torilo"
            date="NOV 2020 – MAR 2021"
            description="Tolerably earnestly middleton extremely distrusts she boy now not.
          Add and offered prepare how cordial two promise. Greatly who affixed suppose
          but enquire compact prepare all put. Added forth chief trees but rooms think may."
            icon={<BsFillPencilFill />}
            color="teal"
          />
          <ExperienceCard
            title="Front-end Designer at BusyBridge Media"
            date="JUN 2021 – SEP 2021"
            description="Tolerably earnestly middleton extremely distrusts she boy now not.
          Add and offered prepare how cordial two promise. Greatly who affixed suppose
          but enquire compact prepare all put. Added forth chief trees but rooms think may."
            icon={<BsFillPencilFill />}
            color="orange"
          />
      
          
          <ExperienceCard
            title="Front end Developer at ItSkillsCenter"
            date="OCT 2021 - Present"
            description="Tolerably earnestly middleton extremely distrusts she boy now not.
          Add and offered prepare how cordial two promise. Greatly who affixed suppose
          but enquire compact prepare all put. Added forth chief trees but rooms think may."
            icon={<BsFillPencilFill />}
            color="#2c98f0"
          />
          <EmpCard
            color="transparent"
          />

        </Box>
      </Container>

      <Container as={"section"} maxW={"container.lg"} color={'gray'} id={"Work"} pt={"50px"} h={{ base: "auto", md: "100vh" }} bg={'white'}>
        <Header title="my work" head="recent work" />

        <Tabs mt="72px">
          <TabList overflowX={{ base: "auto", lg: "none" }}>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >All</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >WordPress</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >React.js</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >React Native</Tab>
            <Tab _selected={{ color: 'white', bg: 'red.red500' }} >Others</Tab>
          </TabList>
          <TabPanels>
            <TabPanel color={'gray'} bg={'white'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>
                <WorkCard
                  title="Wiztech Ng (Php)"
                  description="Designed and managed wiztechNg with HTML, Css, javascript, Bootstrap and PHP fully responsive on all devices"
                  image="wiztech.png"
                  link="https://wiztechng.com/"
                />
                <WorkCard
                  title="Bodds Support App (React.js)"
                  description="Designed the front-end of this project using React.js frame-work, CSS3, HTML5, and Consumed API for the functionality of the website"
                  image="bodd.png"
                  link="https://support.bodds.com.ng/"
                />
                <WorkCard
                  title="Eco-Basket (React.js)"
                  description="Designed this project using React.js frame-work, CSS3, HTML5, and made sure it's responsive on all devices"
                  image="eco-basket.png"
                  link="https://noahadeleke.com/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a UI/UX Designer"
                  description="Designed this portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="uiux.png"
                  link="https://elijahleke.com/"
                />
                <WorkCard
                  title="A Portfolio design for a Concept Designer"
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_ope.png"
                  link="http://adelekeopeyemi.com.ng/"
                />
                <WorkCard
                  title="UI/UX Portfolio for a Product Designer "
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_UI.png"
                  link="http://uiux.adelekeopeyemi.com.ng/"
                />

                <WorkCard
                  title="Logistic app (Laravel) "
                  description="Designed the logistic app using Laravel, CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="logistic.png"
                  link="http://my-logistic-app.herokuapp.com/"
                />

              </SimpleGrid>
            </TabPanel>
            <TabPanel bg={'white'} color={'gray'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>


              </SimpleGrid>
            </TabPanel>
            <TabPanel bg={'white'} color={'gray'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>

                <WorkCard
                  title="Bodds Support App (React.js)"
                  description="Designed the front-end of this project using React.js frame-work, CSS3, HTML5, and Consumed API for the functionality of the website"
                  image="bodd.png"
                  link="https://support.bodds.com.ng/"
                />

                <WorkCard
                title="Eco-Basket (React.js)"
                description="Designed this project using React.js frame-work, CSS3, HTML5, and made sure it's responsive on all devices"
                image="eco-basket.png"
                link="https://noahadeleke.com/"
              />


              </SimpleGrid>
            </TabPanel>
            <TabPanel color={'gray'} bg={'white'}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>

                <WorkCard
                  title="Logistic app (Laravel) "
                  description="Designed the logistic app using Laravel, CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="logistic.png"
                  link="http://my-logistic-app.herokuapp.com/"
                />



              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"}>
                <WorkCard
                  title="Wiztech Ng (Php)"
                  description="Designed and managed wiztechNg with HTML, Css, javascript, Bootstrap and PHP fully responsive on all devices"
                  image="wiztech.png"
                  link="https://wiztechng.com/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a UI/UX Designer"
                  description="Designed this portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="uiux.png"
                  link="https://elijahleke.com/"
                />

                <WorkCard
                  title="A Portfolio design for a Concept Designer"
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_ope.png"
                  link="http://adelekeopeyemi.com.ng/"
                />

                <WorkCard
                  title="UI/UX Portfolio for a Product Designer "
                  description="Designed the portfolio using CSS3, HTML5, Bootstrap,  JQuery and javascript and fully responsive on all device"
                  image="product_UI.png"
                  link="http://uiux.adelekeopeyemi.com.ng/"
                />

              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

    </MainLayout>
  );
}
