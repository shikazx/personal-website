import './App.css'

import { Text, Flex, Box} from '@chakra-ui/react'
import { Provider } from "@/components/ui/provider"
import profile from './constants/basic_profile.yaml'


function App() {

  return (
    <Provider>
       <Flex mx="25%" mt="2%" direction="column" h='100vh'>
        <Box >
          <Text color={'black'} textStyle="6xl" textAlign='center'>
              {profile.profile.title}
        </ Text >
        </Box>
      </Flex>
    </Provider>
  )
}

export default App
