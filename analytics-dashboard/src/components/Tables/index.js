import { usePagination, useSortBy, useTable } from "react-table";

export default function Tables({columns,data}){

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page, // rows for the table based on the data passed
    nextPage,
    previousPage,
    canNextPage,
    canPrevoiusPage,
    prepareRow,
     // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  },useSortBy,
  usePagination  
  );



    return (
        <div className={"page-sect-card "+""} >
 <table className="linkedin-table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr style={{padding:"20px"}} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row);
          return (
            <tr style={{padding:"20px"}} {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>        
  </div>
    
    );
}