import { SearchForm } from "../types";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type Props = {
  setCountry: (country: SearchForm) => void;
};

function Search({ setCountry }: Props) {
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const onSubmit = (data: SearchForm) => {
    setCountry(data);
    reset(); // limpia el input
  };
  return (
    <Flex maxW={"90%"} m={"auto"} maxH={"100px"}>
      <Box w="300px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              placeholder="Ingrese ciudad para buscar"
              {...register("country")}
              required
            />
            <InputRightElement width="5.5rem">
              <Button type="submit" h="1.75rem" size="sm" variant="outline">
                Buscar
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>
      <Spacer />
      <Center>
        <Select defaultValue={""} maxW={"200px"}>
          <option value="" disabled hidden>
            Select option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Center>
    </Flex>
  );
}

export default Search;
