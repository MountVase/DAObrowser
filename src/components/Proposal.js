import React, { useMemo } from "react"
import styled, { createGlobalStyle } from "styled-components"

import { useParams } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"
import Loading from "../components/Loading"

import { PROPOSAL_DETAILS } from "../queries" 


const Proposal = () => {

  const propid = useParams().propid
  const id = useParams().id
  
  const [getProposalInfo, result] = useLazyQuery(PROPOSAL_DETAILS)


  useMemo(() => {
    getProposalInfo({ variables: { id: id, propid: propid } })
  }, [])


  if (!result.data) {
    return (
      <Loading />
    )
  }
  

  console.log(result.data.daos[0].proposals[0])

  return (
    <>

    <GlobalStyle />

    <DaoContainer>
      <PropTitle>
        {result.data.daos[0].proposals[0].title}
      </PropTitle>

      <Description>
        Description:
      </Description>

      <PropDesc>
        {result.data.daos[0].proposals[0].description}
      </PropDesc>

    </DaoContainer>
    </>
  )

}

export default Proposal



const DaoContainer = styled.div`
  
  margin-left: 5%;
  margin-right: 5%;


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
  line-height: 1.8;

  margin-top: 5%;
  margin-right: 25%;

  :hover {
    background-color: #fffae6;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`

const Description = styled.div`
  color: black;
  font-size: larger;
  font-family: monospace;
  margin-top: 5%;
  
`


