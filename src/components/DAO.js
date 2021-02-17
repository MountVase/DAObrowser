import React, { useEffect, useMemo, useState } from "react"

import { useLazyQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

import { PROPOSALS } from "../queries"
import styled from "styled-components"



const DaoContainer = styled.div`
  
  margin-left: 5%;
  margin-right: 5%;
  background-color: yellow;
  margin-top: 5%;
`

const DaoTitle = styled.div`
  color: black;
  font-size: xx-large;
  font-family: monospace;
`

const DaoProposalsTitle = styled.div`
  color: black;
  font-size: larger;
  font-family: monospace;
  margin-top: 5%;
`

const DaoProposals = styled.div`
  font-size: large;
  background-color: green;
  padding: 1%;
  margin: 1%;
`


const DAO = () => {
  const id = useParams().id
  // now let's fetch a new query for the specific DAO's proposals, members, etc.
  const [getProposals, result] = useLazyQuery(PROPOSALS)
  
  //const proposals = result?.data?.daos?.proposals

  useEffect(() => {
    getProposals({ variables: { id: id } })
  }, [])
  
  console.log(result.data)

  if (!result.data) {
    return (<div>
      hold one second
    </div>)
  }

  return (
    <>
    <DaoContainer>
      <DaoTitle>
        {result.data.daos[0].name}
      </DaoTitle>

      <DaoProposalsTitle>
        Proposals:
      </DaoProposalsTitle>


        {result.data.daos[0].proposals.map(prop => {
          return <DaoProposals key={prop.id}> {prop.title} </DaoProposals>
        })}
      

    </DaoContainer>
    </>
  )
}

export default DAO