import { GridColDef } from "@mui/x-data-grid";
import AddProduct from "../../components/AddProduct/AddProduct";
import DataTabel from "../../components/dataTabel/dataTabel";
import "./Products.scss"
import { useState } from "react";
import { products } from "../../MenuData";
import AddUser from "../../components/AddUser/AddUser";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


export default function Products() {

  const [open , setOpen] = useState(false);
  return (
   
      <div className="products">
    <div className="info">
      <h2>  محصولات سایت  </h2>
      <button onClick={() => setOpen(true)}>  اضافه کردن محصول   </button>
    </div>

    <div className="d-tabel">
      <DataTabel slug="products" columns= {columns} rows={products }/>
      {open && <AddUser slug="product"  columns={columns}  setOpen={setOpen}/>  }
    </div>
    </div>
   
  )
}
