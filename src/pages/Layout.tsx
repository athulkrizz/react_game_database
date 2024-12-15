import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
