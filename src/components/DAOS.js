import React, { useMemo } from "react"
import { useTable, useSortBy } from "react-table"

import { Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"


const DAOS = ({ daos }) => {

    console.log(daos)


    const columns = React.useMemo(() => [
      {
        Header: 'DAO',
        accessor: 'name'
      },

      {
        Header: 'Members',
        accessor: 'reputationHoldersCount'
      }
    ]
    , [])



    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
    {
      columns,
      data: daos,
    },
    useSortBy,
    );
    
    //console.log((getTableBodyProps()))
    // able to access original objects id property inside cell mapping by;:
    // cell.row.original.id

    return (
      <>
      <BigContainer>
      <GlobalStyle />

      <Styles>
      <DaoContainer>
      <table {...getTableProps()}>

      
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (

                
                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Hover>{column.render('Header')}</Hover>
                  
                  <span>        
                   {column.isSorted
                 ? column.isSortedDesc
                  ? ' 🔽'
                  : ' 🔼'
                  : '〽️'}
                    </span>
                </th>
                
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>
                        <Hover>
                            <StyledLink to={`/${cell.row.original.id}`} color="black">
                            {cell.render('Cell')}
                            </StyledLink>
                        </Hover>
                            </td>
                        })}
              </tr>
            )
          })}
        </tbody>
      </table>
      </DaoContainer>
      </Styles>


      <CopyContainer>
        <Copy>
        <b>DAObrowser!</b> <br/> 

        All info that you see fetched with dynamically GraphQL from this DAOstack subgraph: https://thegraph.com/explorer/subgraph/daostack/v41_9_xdai. 

        Feel free to change that to another subgraph from daostack. <br/>
          
        <StyledA href="https://github.com/MountVase/DAObrowser"
          target="_blank"
          rel="noopener noreferrer"
          >
          github.com/mountvase
          </StyledA>
        </Copy>
      </CopyContainer>

      </BigContainer>
      </>
    );

    


}


export default DAOS

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`

const CopyContainer = styled.div`
  display: flex;

  margin-right: 5%;
  width: 25%;
  margin-top: 2.66%;

`

const StyledA = styled.a`
  color: black;
  font-size: larger;
  font-family: monospace;

`


const Copy = styled.div`
  color: black;
  font-size: larger;
  font-family: monospace;
  line-height: 1.8;

  margin-top: 5%;
  margin-right: 25%;

`


const BigContainer = styled.div`

  display: flex;

  justify-content: space-around;
`


const DaoContainer = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
 
  margin-top: 1%;
  justify-content: center;
  align-items: center;

`

const Styles = styled.div`
  padding: 2rem;


  table {
    border-spacing: 0;
    

    tr {

      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

    }
  }
  
`


const Hover = styled.div`
  padding: 2px;

  :hover {
    background-color: #fffae6;
  }
`

const StyledLink = styled(Link)`
  color: black;
  font-size: larger;
  font-family: monospace;
`

