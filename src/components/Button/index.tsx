import { useState } from 'react'
import { Alert, AlertIcon, Button, Box } from '@chakra-ui/react'

const ButtonLogin = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () => {
    setShowAlert(true)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        mt={'2rem'}
        w={'100%'}
        colorScheme="facebook"
      >
        Entrar
      </Button>
      <Box>
        {showAlert && (
          <Alert status="success" mt={'1rem'}>
            <AlertIcon />
            Login realizado com sucesso! Seja bem-vindo ao Dio Bank
          </Alert>
        )}
      </Box>
    </>
  )
}

export default ButtonLogin
