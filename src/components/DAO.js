import React from "react"

import { useParams } from "react-router-dom"


const DAO = () => {
  const id = useParams().id

  return (
    <div>
      welcome! {id}
    </div>
  )
}

export default DAO