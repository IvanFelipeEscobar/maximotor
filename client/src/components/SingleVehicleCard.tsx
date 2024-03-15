import { useParams } from "react-router-dom"

const SingleVehicleCard = () => {

    const { vehicleId }= useParams()
    console.log(vehicleId)
  return (
    <div>SingleVehicleCard</div>
  )
}

export default SingleVehicleCard