import React, { useMemo } from "react"
import styled from "styled-components"

import {Link, useParams } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"

import { PROPOSAL_DETAILS } from "../queries" 

const DaoContainer = styled.div`
  
  margin-left: 5%;
  margin-right: 5%;
  background-color: yellow;
  margin-top: 5%;
`

const PropTitle = styled.div`
  color: black;
  font-size: xx-large;
  font-family: monospace;
`

const PropDesc = styled.div`
  color: black;
  font-size: larger;
  font-family: monospace;

  margin-top: 5%;
`

const Proposal = () => {

  const propid = useParams().propid
  const id = useParams().id
  
  const [getProposalInfo, result] = useLazyQuery(PROPOSAL_DETAILS)


  useMemo(() => {
    getProposalInfo({ variables: { id: id, propid: propid } })
  }, [])


  if (!result.data) {
    return (
      <div>hold on a bit more!</div>
    )
  }
  

  console.log(result.data.daos[0].proposals[0])

  return (
    <>

    <DaoContainer>
      <PropTitle>
        {result.data.daos[0].proposals[0].title}
      </PropTitle>

      <PropDesc>
        {result.data.daos[0].proposals[0].description}
      </PropDesc>

    </DaoContainer>
    </>
  )

}

export default Proposal