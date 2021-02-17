import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_DAOS } from "./queries"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import DAOS from "./components/DAOS"
import DAO from "./components/DAO"
import Proposal from "./components/Proposal"

const App = () => {

  const { loading, data } = useQuery(ALL_DAOS)

  const daos = data?.daos

  if (loading) {
    return (
      <div>
        hey there!
      </div>
    )
  }
  
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DAOS daos={daos}/>
        </Route>

        <Route path="/:id">
          <DAO />
        </Route>

        <Route path="/:id/:propid">
          <Proposal />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
