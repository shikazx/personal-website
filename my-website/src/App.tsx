import './App.css'

import { chakra, ChakraProvider, Text, Flex, Box} from '@chakra-ui/react'
import { Provider } from "@/components/ui/provider"

function App() {

  return (
    <Provider>
       <Flex mx="25%" mt="2%" direction="column" h='100vh'>
        <Box >
          <Text color={'black'} textStyle="6xl" textAlign='center'>
          hi :D im gerald, welcome to my page? 
        </ Text >
        </Box>
      </Flex>
    </Provider>
  )
}

export default App
