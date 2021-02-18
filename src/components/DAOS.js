import React, { useMemo } from "react"
import { useTable, useSortBy } from "react-table"

import { Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fcf1c7;
  }
`

const DaoContainer = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
 

  width: 50%;
  margin-top: 1%;
  justify-content: center;
  align-items: center;
  height: 5%;
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
      </>
    );



   
    // return (
    //     <>
    //       {data?.daos.map(dao => {
    //         const name = dao.name
    //         const members = dao.reputationHoldersCount
    //         const token = dao.nativeToken.name
    //         const supply = dao.nativeToken.supply

    //         return (
    //           <DaoContainer>
    //           <DaoBox>
    //             <DaoTitle>
    //               {name}
    //             </DaoTitle>
    //           </DaoBox>


    //           <DaoMembers>
    //               members {members}
    //             </DaoMembers>
    //           </DaoContainer>
    //         )
    //       })}

    //     </>
    // )
    


}


export default DAOS

