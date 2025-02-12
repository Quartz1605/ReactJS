//This is used in facebook and all to display uss person ki profile jispe humne click kiya hai.
import { useParams } from "react-router-dom"

//Naam yaad se same rakhna

export default function User(){
  const {userid} = useParams()

  return(
    <h1>User: {userid}</h1>
  )


}