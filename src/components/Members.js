import React, { useMemo } from "react"
import styled, { createGlobalStyle } from "styled-components"

import { useParams } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"
import { MEMBERS } from "../queries"
import Loading from "./Loading"




const Members = () => {
    const id = useParams().id

    const [getMembers, result] = useLazyQuery(MEMBERS)

    useMemo(() => {
        getMembers({ variables: { id: id }})
    }, [])


    if (!result.data) {
        return (
            <Loading />
        )
    }

    console.log(result.data.daos)

    return (
        <>
        <GlobalStyle />

        <DaoContainer>
            <TitleContainer><Title>Members of <b>{result.data.daos[0].name}</b></Title></TitleContainer>

            {result.data.daos[0].reputationHolders.map(rep => {
                return (<AddressContainer>
                        <Address href={`https://etherscan.io/address/${rep.address}`}
                        key={rep.address}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    {rep.address}
                    </Address>
                    </AddressContainer>
                    )
            })}
        </DaoContainer>
        </>
    )

}

export default Members


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`

const DaoContainer = styled.div`
  
margin-left: 5%;
margin-right: 5%;


margin-top: 5%;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-right: 5%;
`


const Title = styled.div`
  font-size: large;
  font-family: monospace;

`

const AddressContainer = styled.div`
    margin: 1%;

`

const Address = styled.a`
    color: black;
    font-size: x-large;
    font-family: monospace;
  
    :hover {
        background-color: #fffae6;
     }

`