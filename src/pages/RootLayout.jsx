import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import {useSetAtom} from 'jotai';
import { userData } from "../data";





export function RootLayout() {
  const setUser = useSetAtom(userData);

  useEffect(() => {
    if(localStorage.getItem('pocketbase_auth')) {
      const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth'));
      setUser(currentUser.model);
    }
  }, [])



  return (
    <>
      <Outlet /> 
    </>
  )
}