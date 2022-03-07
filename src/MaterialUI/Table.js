import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

function Table() {
    const [data, setData] = useState([])
    const columns = [
        {title:"Id", field: "id"},
        {title:"Username", field: "username"},
        {title:"Name", field: "name"},
        {title:"Email", field: "email"},
        {title:"Phone", field: "phone"},
        {title:"Web Link", field:"website"}
        
    ]

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        })
    },[])
  return (
    <>
    <h1 className='text-center'>Recat-App</h1>
    <h4 className='text-center'>Material-Table</h4>
    <MaterialTable
        title='Employee Data'
        data={data}
        columns={columns}
    />
    </>
  )
}

export default Table