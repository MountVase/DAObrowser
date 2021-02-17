import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { ALL_DAOS } from "../queries"

import styled from "styled-components"

const DaoContainer = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  background-color: yellow;

  margin-top: 1%;
  justify-content: space-between;
  align-items: center;
  height: 5%;
`

const DaoBox = styled.div`
    display: flex;
    width: 25%;
    height: 6%;
    background-color: orange;

    margin-left: 5%;

`

const DaoTitle = styled.div`
  font-size: x-large;
  font-family: monospace;
`

const DaoMembers = styled.div`
    display: flex;
    width: 25%;
    height: 6%;
    background-color: blue;

    font-size: x-large;
    font-family: monospace;

`


const DAOS = () => {
    const { loading, data } = useQuery(ALL_DAOS)

   
    if (loading) {
        return (<div>skeleton!</div>)
    }
   
    console.log(data?.daos)
    return (
        <>
          {data?.daos.map(dao => {
            const name = dao.name
            const members = dao.reputationHoldersCount
            const token = dao.nativeToken.name
            const supply = dao.nativeToken.supply

            return (
              <DaoContainer>
              <DaoBox>
                <DaoTitle>
                  {name}
                </DaoTitle>
              </DaoBox>


              <DaoMembers>
                  members {members}
                </DaoMembers>
              </DaoContainer>
            )
          })}

        </>
    )



}


export default DAOS


