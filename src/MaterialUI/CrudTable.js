import React from "react";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { random } from "lodash";

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj12@gmail.com",
    phone: 8179924835,
    city: "Bangalore",
  },
  {
    id: 2,
    name: "Vamsi",
    email: "vamsi07@gmail.com",
    phone: 8398989939,
    city: "Kochi",
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    phone: 9838498980,
    city: "Tirupati",
  },
  {
    id: 4,
    name: "Sachin",
    email: "sachin30@gmail.com",
    phone: 9908854132,
    city: "Kolar",
  },
  {
    id: 5,
    name: "Akash",
    email: "akash12@@gmail.com",
    phone: 8309306489,
    city: "Punganur",
  },
];

function CrudTable() {
  const [data, setData] = useState(empList);

  const columns = [
    { title: "Id", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "City", field: "city" },
  ];
  return (
    <div>
      <h1 className="text-center">React-App</h1>
      <h4 className="text-center">Render customData using Material-UI</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, react) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve, reject)=>{
                const index= oldRow.tableData.id;
                const updatedRows=[...data]
                updatedRow[index]=updatedRow
                setTimeout(()=>{
                    setData(updatedRows)
                    resolve()
                },2000)
            })
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />
    </div>
  );
}

export default CrudTable;
