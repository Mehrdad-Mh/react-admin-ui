import { Box } from "@mui/material";
import "./dataTabel.scss"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";


type Props = {
    columns : GridColDef[];
    rows : object[];
    slug: string;
}



const DataTabel = (props:Props) => {


    const handleDelete = (id:number) => {
     //axios.delet (`/api/${slug}/id`)
     //axios.delet (`/api/${product.slug}/id`)
        console.log(id ,"   has been deleted")
    }

    const actionColumn : GridColDef = {
        field : " action",
        headerName : "Action",
        width:200,
        renderCell : (params) => {
            return (
                <div className="action">
               <Link to={`/${props.slug}/${params.row.id}`}>
               <img src="/view.svg" alt="" />
               </Link>

               <div className="delete"  onClick={() => handleDelete(params.row.id)}>
                <img src="/delete.svg" alt="" />
               </div>
                   
                </div>
            )
        }

    }


  return (
    <div className="dataTabel">
       <Box sx={{ height: "100%", width: '96%'  }}>
      <DataGrid
      className="data-grid"
        rows={props.rows}
        columns={[...props.columns , actionColumn]}
        initialState={{
            
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter 
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
    </div>
  )
}

export default DataTabel
