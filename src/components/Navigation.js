import React from "react"

import { Link, useParams } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"


const Container = styled.div`
    display: flex;
    margin-left: 10%;
    margin-right: 5%;
    margin-top: 1%;
`

const StyledLink = styled(Link)`
  color: black;
  font-size: medium;
  font-family: monospace;
`

const Text = styled.div`
  color: black;
  font-size: medium;
  font-family: monospace;

`


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`



const Navigation = () => {

    const id = useParams().id


    return (
        <>  
        <GlobalStyle />

        <Container>
            <Text>[ &nbsp;  </Text>
            <StyledLink to="/"> home &nbsp;</StyledLink>
            {id ? <StyledLink to={id ? `/${id}` : ''}>DAO &nbsp;</StyledLink> : ""}
            {id ? <StyledLink to={id ? `/${id}/members` : ""}>Members &nbsp;</StyledLink> : ""}
            <Text> ] </Text>

        </Container>

        </>
    )

}

export default Navigation



