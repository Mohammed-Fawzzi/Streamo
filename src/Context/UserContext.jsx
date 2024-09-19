import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider({children}) {
  // Inputs Data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User Token
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ name,setName , email,setEmail , password,setPassword , token, setToken}}>
        {children}
    </UserContext.Provider>
  );
}
