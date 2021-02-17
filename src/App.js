import React from "react"
import { useQuery } from "@apollo/client"
import { ALL_DAOS } from "./queries"

import DAOS from "./components/DAOS"

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
      <DAOS daos={daos}/>

    </>
  )
}

export default App;
