import { Box, ChakraProvider, Center } from '@chakra-ui/react'

import Inputs from '../../components/Inputs'
import ButtonLogin from '../../components/Button'

const Login = () => (
  <ChakraProvider>
    <Center>
      <Box
        textAlign="center"
        alignItems={'center'}
        fontSize="xl"
        m={'4rem'}
        minW={'50vw'}
        w={'50vw'}
      >
        <Inputs />
        <ButtonLogin />
      </Box>
    </Center>
  </ChakraProvider>
)

export default Login
