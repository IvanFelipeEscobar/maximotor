import {
    Alert,
    AlertIcon,
    AlertDescription,
  } from '@chakra-ui/react'
const FormAlert = ({alertText} : {alertText: string}) => {
  return (
    <Alert status='error'>
  <AlertIcon />
  <AlertDescription>{alertText}</AlertDescription>
</Alert>
  )
}

export default FormAlert