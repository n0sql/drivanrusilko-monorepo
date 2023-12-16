import React from "react"
import HomePage from "../components/homepage/home-page"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
export default function MyPage(){

    return(
  <HomePage/>
    
   )
}