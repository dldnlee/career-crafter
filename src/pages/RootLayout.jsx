import { Outlet } from "react-router-dom";
import { GlobalNavigationBar } from "../components";



export function RootLayout() {
  return (
    <>
      <Outlet /> 
      <GlobalNavigationBar />
    </>
  )
}