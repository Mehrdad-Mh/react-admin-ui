import "./Users.scss"
import DataTabel from "../../components/dataTabel/dataTabel"
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../MenuData";


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
{
  field : "avatar",
  headerName:"Avatar",
  width:100,
  renderCell : (params) => {
      return <img src={params.row.img ||" /noavatar.png"} alt="" />
  }
},

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 110,
  //   editable: true,
  // },
  {
    field: 'email',
    headerName: 'Email',
    // description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    type:"string"
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    // description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 160,
    type:"string"
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    // description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 150,
    type:"string"
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
field: "verified" ,
headerName:"verified",
type:"boolean",
width:100
// renderCell: (params) => {
//     return <img src={params.row.verified || } alt="" />
// }
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


export default function Users() {
  return (
    <div className="users">
    <div className="info">
      <h2>  کاربران سایت  </h2>
      <button>  اضافه کردن مخاطب  </button>
    </div>

    <div className="d-tabel">
      <DataTabel slug="users" columns= {columns} rows={userRows}/>
    </div>
    </div>
  )
}
