import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={colorMode === "dark" ? logo_dark : logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
