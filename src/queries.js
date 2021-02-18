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


export const PROPOSALS =  gql`

query daoProposals($id: String!) {
  daos (where: { id: $id}) {
    name
    proposals  {
      id
      title
      proposer
      votesFor
      votesAgainst
      executedAt
    }
  }
}
`


export const PROPOSAL_DETAILS = gql`

query proposalInfo($id: String!, $propid: String!) {
    daos (where: { id: $id }) {

        proposals (where: { id: $propid}) {
            id
            title
            proposer
            votesFor
            votesAgainst
            description
            executedAt
            votes {
              outcome
            }
          }
        }
    }

`

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone 
      id
      address {
        street
        city
      }
    }
  }
`


