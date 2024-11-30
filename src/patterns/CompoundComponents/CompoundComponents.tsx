import { createContext, useContext } from "react";

const SOURCE = [
   { name: "Evgeniy", age: 21, address: "Ekaterinburg" },
   { name: "Lev", age: 27, address: "Ekaterinburg" },
   { name: "Anya", age: 31, address: "Rybinsk" },
];

const TABLE_STYLES = {
   display: "grid",
   border: "1px solid black",
   borderRadius: 10,
   padding: 6,
   background: "#dddddd",
};

const TableContext = createContext<any>(undefined);

const Table = ({ children }: any) => {
   return (
      <TableContext.Provider value={{ count: children.length }}>
         <div
            style={{
               ...TABLE_STYLES,
               gridTemplateColumns: `repeat(${children.length}, 1fr)`,
            }}>
            {children}
         </div>
      </TableContext.Provider>
   );
};

const TableItem = ({ children }: any) => {
   const context = useContext(TableContext);

   return <>{children}</>;
};

const TableCell = ({ fontWeight, color, onClick, children }: any) => {
   const context = useContext(TableContext);

   return (
      <div style={{ fontWeight, color }} onClick={onClick}>
         {children}
      </div>
   );
};

Table.Item = TableItem;
Table.Cell = TableCell;

const CompoundComponents = () => {
   return (
      <div>
         <h2>Compound Components</h2>
         <Table>
            {SOURCE.map((record, index) => (
               <Table.Item data={record} key={index}>
                  <Table.Cell fontWeight="600" color="#1677ff" onClick={() => alert("header")}>
                     {record.name}
                  </Table.Cell>
                  <Table.Cell>{record.age}</Table.Cell>
                  <Table.Cell>{record.address}</Table.Cell>
               </Table.Item>
            ))}
         </Table>
      </div>
   );
};

export default CompoundComponents;
