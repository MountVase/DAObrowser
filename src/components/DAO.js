import React, {  useMemo } from "react"

import { useLazyQuery } from "@apollo/client"
import { useParams, Link } from "react-router-dom"

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
  display: flex;
  background-color: orange;
  padding: 1%;
  margin: 1%;
  
  align-items: center;
  justify-content: space-between;

`

const PropTitle = styled.div`
  font-size: large;
  font-family: monospace;

`

const Votes = styled.div`
  display: flex;
`

const VotesAgainst = styled.div`
  font-size: large;
  color: red;
  margin-right: 1px;

`

const VotesFor = styled.div`
  font-size: large;
  color: green;
  margin-right: 1px;
`


const StyledLink = styled(Link)`
  color: black;
  font-size: larger;
  font-family: monospace;
`
//border: 2px solid #000;
//border-radius: 8px;

const Details = styled.div`
    max-height: ${props => props.open ? "100%" : "0"};
    overflow: hidden;
    padding: ${props => props.open ? "25px 0" : "0"};
    transition: all 0.3s ease-out;
`;



const extendedInfo = (e) => {
  e.preventDefault()

  return (
    <div>hey all!</div>
  )
}


const DAO = () => {
  const id = useParams().id
  // now let's fetch a new query for the specific DAO's proposals, members, etc.
  const [getProposals, result] = useLazyQuery(PROPOSALS)
  
  //const proposals = result?.data?.daos?.proposals

  useMemo(() => {
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
          return (
          <>
          
          <DaoProposals key={prop.id} onClick={extendedInfo}> 
            
            <PropTitle>
              <StyledLink to={`/${id}/${prop.id}`}>{prop.title}</StyledLink>
            </PropTitle>
            
            <Votes>
              <VotesFor>
              {prop.votesFor} ⏫
              </VotesFor>

              <VotesAgainst>
                {prop.votesAgainst} ⏬
              </VotesAgainst>
            </Votes>

          </DaoProposals>
          </>)
        })}
      

    </DaoContainer>
    </>
  )
}

export default DAO