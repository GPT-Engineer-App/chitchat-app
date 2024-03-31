import React, { useState } from "react";
import { Box, Flex, Input, VStack, Button, Text, HStack, Avatar, Divider, useToast } from "@chakra-ui/react";
import { FaRegCommentDots, FaSearch, FaBell, FaCog } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const sendMessage = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Message is empty.",
        description: "Please enter a message to send.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <Flex h="100vh" bg="gray.100">
      {/* Sidebar */}
      <VStack w="300px" p="4" bg="white" spacing="4" borderRight="1px" borderColor="gray.200">
        <Avatar size="md" name="Chat User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMTkxMDA4Mnww&ixlib=rb-4.0.3&q=80&w=1080" />
        <HStack w="full" spacing="2">
          <Input placeholder="Search" />
          <Button variant="outline" leftIcon={<FaSearch />}></Button>
        </HStack>
        <Button w="full" leftIcon={<FaRegCommentDots />} justifyContent="flex-start">
          New Chat
        </Button>
        <Button w="full" leftIcon={<FaBell />} justifyContent="flex-start">
          Notifications
        </Button>
        <Button w="full" leftIcon={<FaCog />} justifyContent="flex-start">
          Settings
        </Button>
      </VStack>

      {/* Chat area */}
      <VStack flex="1" p="4" spacing="4">
        <Flex w="full" p="4" bg="white" borderRadius="lg" shadow="base">
          <Text fontWeight="bold">Chat Room</Text>
        </Flex>
        <VStack flex="1" w="full" p="4" bg="white" borderRadius="lg" shadow="base" overflowY="auto" spacing="4">
          {messages.map((msg, index) => (
            <Box key={index} bg="blue.100" p="2" borderRadius="md" alignSelf="flex-end">
              <Text>{msg}</Text>
            </Box>
          ))}
        </VStack>
        <HStack w="full">
          <Input placeholder="Type a message" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
          <Button colorScheme="blue" onClick={sendMessage}>
            <FaPaperPlane />
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Index;
