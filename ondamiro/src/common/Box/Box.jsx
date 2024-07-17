import React from "react"
import { useNavigate } from "react-router-dom"
import data from "../Main/data.json"

const Box = ({ title, person, time }) => {
  const Navigate = useNavigate()
  console.log(data.items)
  return (
    <>
      {data.items.map((data) => (
        <>
          <div key={data.id}>
            <div>{data.title}</div>
            <div>{data.time}</div>
            <div>{data.person}</div>
          </div>
        </>
      ))}
    </>
  )
}

export default Box
