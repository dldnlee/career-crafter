import Header from "src/components/Header"
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { GlobalNavigationBar } from "../components"


export function MainPage() {
  const [, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])


  return (
    <>
      <Header  clickHandler2={() => navigate('settings')}/>
      <Outlet />
      <GlobalNavigationBar />
    </>
  )
}