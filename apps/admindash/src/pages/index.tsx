import React from "react"
import HomePage from "../components/homepage/home-page"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
export default function MyPage(){
  const {data: session, status} = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (session) {
      console.log(session)
      router.push("/admin")
    }
  }
  , [session])
    return(
  <HomePage/>
    
   )
}