import React from 'react'
import data  from "../Main/data.json"
import Topbar from "../../common/Topbar/Topbar"

const Main = () => {
  console.log(data.items)
  return (
    <>
    <Topbar />
    {data.items.map(data=>(<>
    <div key={data.id}>
      <div>{data.title}</div>
      <div>{data.time}</div>
      <div>{data.person}</div>
    </div>
    </>))}
    </>
  )
}

export default Main