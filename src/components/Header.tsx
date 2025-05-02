import {
    Button,
    Center,
    Flex,
    Icon,
    Spacer,
    useColorMode
} from "@chakra-ui/react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex mt={2}>
      <Center>Where in the world?</Center>
      <Spacer />
      <Center>
        <Button onClick={toggleColorMode} variant="ghost">
          <Icon as={colorMode === "light" ? FaMoon : FaRegSun} />
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Center>
    </Flex>
  );
};

export default Header;
