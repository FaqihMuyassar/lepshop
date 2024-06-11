import Landing from "../assets/page/Landing";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false)
  const {push} = useRouter()
  useEffect(() => {
    const isLoginData = sessionStorage.getItem("isLogin")
    if (isLoginData) {
      setIsLogin(isLoginData)
    } else {
      push("/sign/login")
    }
  })

  return (
    <>
      <Landing/>
    </>
  );
}

export default Home;