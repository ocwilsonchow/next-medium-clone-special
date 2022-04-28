import { FormControl, InputGroup, InputLeftElement, Input, Box} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <Box p={2}>
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
