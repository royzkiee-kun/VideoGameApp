import {
  HStack,
  Image,
  Text,
  SimpleGrid,
  Icon,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePLatforms from "../hooks/usePlatforms";
const PlatformSelector = () => {
  const { data, error } = usePLatforms();

  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
