

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3p5qtwr",
        "template_uwkazwp",
        form.current,
        "AGeD7bgNARvvbSvME"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            position: "top",
            title: "Thank you for connect with us",
            status: "success",
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      
    
    
        <Box  >
          <form ref={form} onSubmit={sendEmail}>
            <Input
           
              placeholder="Enter Name"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_name"
            color={"orange"}
            />
            <br />
       
            <Input
               color={"orange"}
              placeholder="Enter Phone"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_phone"
            />
            <br />
        
            <Input
               color={"orange"}
              placeholder="Enter Email"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="user_email"
            />
            <br />
      
            <Textarea
               color={"orange"}
              placeholder="Enter Massage"
              w="70%"
              fontSize="20px"
              borderRadius={3}
              name="message"
            />
            <br />
       
            <Button
              color="white"
              border="none"
              w="70%"
              fontSize="22px"
              bg="teal"
              _hover={{ cursor: "pointer", bg: "orange", w: "71%" }}
              borderRadius={3}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Box>
    
    </>
  );
};

export default Email;

