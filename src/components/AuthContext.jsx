import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }
    return null;
  });
  const navigate = useNavigate();
  const login = async (payload) => {
    await axios.post("https://it262-proj.onrender.com/users/login/", payload, {
      withCredentials: true,
    });
    let apiResponse = await axios.get("https://it262-proj.onrender.com/users", {
      withCredentials: true,
    });
    localStorage.setItem("userProfile", JSON.stringify(apiResponse.data));
    setUser(apiResponse.data);
    navigate("/");
  };
  return (
    <>
      <AuthContext.Provider value={{ user, login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
 
export default AuthContext;