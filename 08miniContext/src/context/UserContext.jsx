import Recat, { Children } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ Children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;