import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"

import VehiclePickerButton from "./VehiclePickerButton"

const VehicleCard = () => {
  return (
    <Card align='center' >
    <CardBody>
      <Text>your vehicle will appear here when you add one</Text>
    </CardBody>
    <CardFooter>
      <VehiclePickerButton/>
    </CardFooter>
  </Card>
  )
}

export default VehicleCard