import { gql } from "@apollo/client"


export const ALL_DAOS = gql` 
{
    daos (first: 150) {
        id
        name
        reputationHoldersCount
        nativeToken {
            name
            totalSupply
        }
    }
}
`