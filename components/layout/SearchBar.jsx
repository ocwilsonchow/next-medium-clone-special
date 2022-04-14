import { FormControl, InputGroup, InputLeftElement, Input} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = () => {
  return (
    <div>
      <FormControl px={2}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </FormControl>
    </div>
  );
};

export default SearchBar;
