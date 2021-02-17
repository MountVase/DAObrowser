import React, { useMemo } from "react"
import { useTable, useSortBy } from "react-table"

import styled from "styled-components"

import { dataz } from "./dataz"

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

const DaoTable = styled.table`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  background-color: yellow;

  margin-top: 1%;
  justify-content: space-between;
  align-items: center;
  height: 5%;
`

const TableHeadButton = styled.button`
	background-color: #feffde;
	border-radius: 30px;

	color: black;
	text-decoration: none;
  margin: 2%;

  font-size: larger;

  :hover {
    background-color: #fbff85;
  }
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
  
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "sort-desc"
                      : "sort-asc"
                    : ""
                }              
                >
                  {column.render('Header')}
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
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
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

