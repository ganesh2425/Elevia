import React, { useState } from "react";
import MaterialTable from "material-table";
import { render } from "@testing-library/react";
import "./Table.css";
import { Avatar, Grid } from "@material-ui/core";
import NameCustom from ".";

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj12@gmail.com",
    status: 0,
    dob: "10/04/1997",
  },
  {
    id: 2,
    name: "Vamsi",
    email: "vamsi07@gmail.com",
    status: 3,
    dob: "21/10/2003",
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    status: 1,
    dob: "25/06/1998",
  },
  {
    id: 4,
    name: "Sachin",
    email: "sachin30@gmail.com",
    status: 0,
    dob: "31/03/2000",
  },
  {
    id: 5,
    name: "Akash",
    email: "akash12@@gmail.com",
    status: 7,
    dob: "01/07/1990",
  },
];

function DyneTable() {
  const [data, setData] = useState(empList);

  const columns = [
    { title: "Id", field: "id" },
    {
      title: "Name",
      field: "name",
      render: (row) => <NameCustom name={row.name} />,
    },
    { title: "Email", field: "email" },
    {
      title: "Status",
      field: "status",
      render: (row) => (
        <div className={row.status ? "active" : "deactive"}>
          {row.status ? "Active" : "Deactive"}
        </div>
      ),
    },
    { title: "Data of Birth", field: "dob" },
  ];

  return (
    <>
      <h1 className="text-center">React-App</h1>
      <h4 className="text-center">Render customData using Material-UI</h4>
      <MaterialTable title="Employee Data" data={data} columns={columns} />
    </>
  );
}

export default DyneTable;
