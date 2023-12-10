import React from "react"
import HomePage from "../components/homepage/home-page"
import { useSession } from "next-auth/react"
export default function MyPage(){
  const {data: session, status} = useSession()
  React.useEffect(() => {
    if (session) {
      console.log(session)
      window.location.href = "/admin"
    }
  }
  , [session])
    return(
  <HomePage/>
    
   )
}