import React, { useState } from 'react'

import styled from "styled-components"

const CreateButton = styled.button`
    color: black;
`

const CancelButton = styled.button`
    color: black;
`



const Toggle = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }


  const toggleVisibility = () => {
    // just change the state of visible from 0 to 1 , or vice-versa
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <CreateButton onClick={toggleVisibility} id="expandButton">details</CreateButton>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <CancelButton onClick={toggleVisibility}>cancel</CancelButton>
      </div>
    </div>
  )
}


export default Toggle