import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_DAOS } from "./queries"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import DAOS from "./components/DAOS"
import DAO from "./components/DAO"

const App = () => {

  const { loading, data } = useQuery(ALL_DAOS)

  const daos = React.useMemo(() => data?.daos)

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
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
