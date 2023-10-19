import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  HStack,
  PinInput,
  PinInputField,
  Text
} from '@chakra-ui/react'

const Inputs = () => (
  <>
    <Text fontSize={'3xl'}>Logue no Dio Bank</Text>
    <FormControl mt={'2rem'}>
      <FormLabel fontSize={'lg'}>Informe seu melhor email</FormLabel>
      <Input type="email" />
      <FormHelperText textAlign={'start'} mt={'0.75rem'} mb={'1.5rem'}>
        Nós nunca iremos compartilhar seu email
      </FormHelperText>
    </FormControl>
    <Text align={'start'} mb={'1rem'} fontSize={'xl'}>
      Digite sua Senha:
    </Text>
    <HStack>
      <PinInput otp placeholder="🛡️" size={'xlg'}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  </>
)

export default Inputs
