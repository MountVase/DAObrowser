import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_DAOS } from "./queries"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import DAOS from "./components/DAOS"
import DAO from "./components/DAO"
import Proposal from "./components/Proposal"
import Loading from "./components/Loading"
import Navigation from "./components/Navigation"
import Members from "./components/Members"

const App = () => {


  const { loading, data } = useQuery(ALL_DAOS)

  const daos = data?.daos

  if (loading) {
    return (
      <Loading />
    )
  }
  
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <DAOS daos={daos}/>
        </Route>


        <Route  path="/:id/members">
          <Navigation />
          <Members />
        </Route>

        <Route  path="/:id/:propid">
          <Navigation />
          <Proposal />
        </Route>


        <Route path="/:id">
          <Navigation />
          <DAO />
        </Route>


      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
