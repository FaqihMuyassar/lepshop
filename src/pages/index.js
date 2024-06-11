import Landing from "../assets/page/Landing";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true)
  const {push} = useRouter()
  useEffect(() => {
    handleLogin()
    if (isLogin === true) {
      return;
    } else {
      push("/sign/login")
    }
  })

  const handleLogin = () => {
    const isLoginData = sessionStorage.getItem("isLogin")
    setIsLogin(isLoginData)
  }

  return (
    <>
      <Landing/>
    </>
  );
}

export default Home;