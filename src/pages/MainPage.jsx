import Header from "src/components/Header"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { GlobalNavigationBar } from "../components"


export function MainPage() {
  const [, setUser] = useState();

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])


  return (
    <>
      <Header/>
      <Outlet />
      <GlobalNavigationBar />
    </>
  )
}