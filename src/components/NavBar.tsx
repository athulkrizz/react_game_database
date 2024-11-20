import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>GAME NATION</Text>
    </HStack>
  );
};
