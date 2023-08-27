import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const IsAdmin = ({ children }) => {
  const router = useRouter();
  const authToken = getCookie("authToken");
  useEffect(() => {
    if(!authToken){
    router.push("/login")
    }
  }, [])
  return <>{children}</>;
};

export default IsAdmin;
