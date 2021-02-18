import React, {  useMemo } from "react"

import { useLazyQuery } from "@apollo/client"
import { useParams, Link } from "react-router-dom"

import { PROPOSALS } from "../queries"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

import Loading from "./Loading"






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
    return (
      <Loading />
    )
  }

  return (
    
    <>
    <GlobalStyle />
    <DaoContainer>


      <TitlesContainer>
      <DaoTitle>
        {result.data.daos[0].name}
      </DaoTitle>
      <Members to={`/${id}/members`}>
        {"Members ⬅️"}
      </Members>

      </TitlesContainer>
      



      <Header>
        Proposals:
      </Header>


        {result.data.daos[0].proposals.map(prop => {

          const date = new Date(prop.executedAt * 1000)

          return (
          <>
          
          <DaoProposals key={prop.id} > 
            
            <DateTitle>
              <PropTitle>
                <StyledLink to={`/${id}/${prop.id}`}>{prop.title}</StyledLink>
              </PropTitle>

              <Dates>
                {date.toDateString()}
              </Dates>
            </DateTitle>
            
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


const DaoContainer = styled.div`
  
  margin-left: 5%;
  margin-right: 5%;
  
`

const DaoTitle = styled.div`
  color: black;
  font-size: xx-large;
  font-family: monospace;
`

const Header = styled.div`
  color: black;
  font-size: larger;
  font-family: monospace;
  margin-top: 5%;
`

const DaoProposals = styled.div`
  display: flex;
  
  padding: 1%;
  margin: 1%;
  
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: #fffae6;
  }

`

const DateTitle = styled.div`

`


const TitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-right: 5%;
`


const PropTitle = styled.div`
  font-size: large;
  font-family: monospace;

`

const Dates = styled.div`
  font-size: medium;
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
const Members = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: monospace;
  
  :hover {
    background-color: #fffae6;
  }
`

const StyledLink = styled(Link)`
  color: black;
  font-size: larger;
  font-family: monospace;
`



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`
