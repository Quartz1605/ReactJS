import UserContext from "./UserContext"; 
import {useState} from "react";

//children is nbasically jo aapke ke pass aa raha hai usse waise hi aage pass kardo.

const UserContextProvider = ({children}) => {
    
  const [user,setUser] =  useState(null)
  
  
  return(
        <UserContext.Provider value={{user,setUser}}>
          {children}
        </UserContext.Provider>

  )

}

export default UserContextProvider