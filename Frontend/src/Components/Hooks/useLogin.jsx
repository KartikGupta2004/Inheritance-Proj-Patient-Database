import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (data) => {
    setIsLoading(true);
    console.log("Data:", data);
    const response = await fetch("http://localhost:5000/api/auth/login/", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      throw new Error(json.error);
    } else {
      //Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(json));

      //update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading };
};