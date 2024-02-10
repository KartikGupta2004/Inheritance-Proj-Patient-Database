import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (data) => {
    setIsLoading(true);
    setError(null);
    console.log("Data:", data);
    const response = await fetch("http://localhost:5000/api/auth/createuser/", {
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
      setError(json.error);
    }
    if (response.ok) {
      //Save the user to localStorage
      localStorage.setItem("user", JSON.stringify(json));

      //update the auth context
      dispatch({type:'LOGIN', payload: json});

      setIsLoading(false);
    }
  };

  return {signup, isLoading, error};
};
