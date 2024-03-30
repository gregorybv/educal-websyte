import React, { memo } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = memo(({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
})
