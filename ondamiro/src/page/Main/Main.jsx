import React from 'react'
import data  from "../Main/data.json"
import Topbar from "../../common/Topbar/Topbar"
import Box from '../../common/Box/Box'

const Main = () => {
  console.log(data.items)
  return (
    <>
    <Topbar />
    <div>음식 나눔</div>
    <Box />
    </>
  )
}

export default Main
