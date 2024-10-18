import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default  function AuthProvider({children}) {
    const initialAuthUser=sessionStorage.getItem("Users");
    const initialToken = sessionStorage.getItem("token");
    const [authUser,setAuthUser]=useState(
        initialAuthUser?JSON.parse(initialAuthUser):undefined

    );

    
    const [token, setToken] = useState(initialToken || null);

    return(
        <AuthContext.Provider value={[authUser,setAuthUser, token, setToken]}>
            {children}
        </AuthContext.Provider>
    );
  
}
export const useAuth=()=>useContext(AuthContext);
