import { ChakraProvider, Box, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './Theme/ColorModeSwitcher'
import Login from './Container/Login'

import Header from './Container/Header'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center">
      <ColorModeSwitcher position="fixed" top="6" right="4" />
      <Header />
      <Login />
    </Box>
  </ChakraProvider>
)
